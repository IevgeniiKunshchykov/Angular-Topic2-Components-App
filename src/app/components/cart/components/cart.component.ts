import { Component, Output, Input, EventEmitter } from '@angular/core';

import { CartItem } from '../model/cartitem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  cartItems: Array<CartItem> = [];

  @Output()
  deleteFromCart: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  onRemoveFromCart(cartItem: CartItem) {
    this.deleteFromCart.emit(cartItem);
  }
}
