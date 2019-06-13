import { Component, Input, DoCheck, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';
import { Subscription, Observable } from 'rxjs';
import { OrdersService } from 'src/app/orders/services/orders.service';
import { IOrder } from 'src/app/orders/interfaces/ioder';
import { IOrderItem } from 'src/app/orders/interfaces/iorderitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy, DoCheck {

  cartItems: Array<CartItem> = [];

  totalPrice: number;
  totalCount: number;

  private sub: Subscription = new Subscription();

  constructor(
    private cartService: CartService,
    private orderService: OrdersService,
    private router: Router) {
  }

  ngOnInit(): void {
    // основная подписка
    this.sub.add(this.cartService.getCartItems().subscribe(x => {
      this.cartItems = x;
    }));

    // дочерние
    this.sub.add(this.cartService.getCartInfo().subscribe(x => {
      this.totalCount = x.totalCount;
      this.totalPrice = x.totalPrice;
    }));
  }

  buy() {
    const order: IOrder = {
      orderItems: [],
      id: undefined
    };

    for (const cartItem of this.cartItems) {
      const orderItem: IOrderItem = {
        name: cartItem.product.name,
        count: cartItem.count,
        price: cartItem.product.price * cartItem.count
      };

      order.orderItems.push(orderItem);
    }

    this.orderService.makeOrder(order)
      .subscribe(o => {
        this.cartService.clearCart();
        this.router.navigate(['orders']);
      },
        error => console.log(error));
  }

  ngDoCheck(): void {
    this.cartService.refreshCartInfo();
  }

  removeCartItem(cartItem: CartItem) {
    this.cartService.removeProductFromCart(cartItem);
  }

  increaseCount(cartItem: CartItem) {
    this.cartService.increaseCount(cartItem.id);
  }

  decreaseCount(cartItem: CartItem) {
    this.cartService.decreaseCount(cartItem.id);
  }

  ngOnDestroy(): void {
    // отписка от основной и дочерних
    this.sub.unsubscribe();
  }

  goProductList() {
    this.router.navigate(['product-list']);
  }
}
