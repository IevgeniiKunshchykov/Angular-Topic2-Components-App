import { Component, Input, DoCheck, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';
import { Subscription, Observable } from 'rxjs';
import { OrdersService } from 'src/app/orders/services/orders.service';
import { IOrder } from 'src/app/orders/interfaces/ioder';
import { IOrderItem } from 'src/app/orders/interfaces/iorderitem';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy, DoCheck {

  cartItems: Array<CartItem> = [];

  totalPrice: number;
  totalCount: number;

  private sub: Subscription;

  constructor(private cartService: CartService, private orderService: OrdersService) { }

  ngOnInit(): void {
    // основная подписка
    this.sub = this.cartService.getCartItems().subscribe( x => {
        this.cartItems = x;
      });

      // дочерние
    this.sub.add(this.cartService.getTotalCount().subscribe( x => {
      this.totalCount = x;
    }));

    this.sub.add(this.cartService.getTotalPrice().subscribe( x => {
      this.totalPrice = x;
    }));
  }

  buy() {

    const order: IOrder = {
      orderItems: []
    };

    for (const cartItem of this.cartItems) {
      const orderItem: IOrderItem = {
        name : cartItem.product.name,
        count : cartItem.count,
        price : cartItem.product.price * cartItem.count
      };

      order.orderItems.push(orderItem);
    }

    this.orderService.makeOrder(order);
    this.cartService.clearCart();
  }

  ngDoCheck(): void {
    this.cartService.refreshTotalCount();
    this.cartService.refreshTotalPrice();
  }

  removeCartItem(cartItem: CartItem) {
    this.cartService.removeProductFromCart(cartItem);
  }

  ngOnDestroy(): void {
    // отписка от основной и дочерних
    this.sub.unsubscribe();
  }
}
