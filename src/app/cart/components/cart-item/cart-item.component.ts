import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;
  @Output() removeCartItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  countWheelTurned(event: WheelEvent) {
    console.log(event);
    if (event.deltaY < 0) {
      this.cartService.increaseCount(this.cartItem.id);
    }

    if (event.deltaY > 0) {
      this.cartService.decreaseCount(this.cartItem.id);
    }
  }

  validateCount() {
    if (this.cartItem.count < 1) {
      this.cartItem.count = 1;
    }
  }

  removeFromCart() {
    this.removeCartItem.emit(this.cartItem);
  }
}
