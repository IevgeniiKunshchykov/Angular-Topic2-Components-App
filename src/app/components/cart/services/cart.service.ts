import { Injectable } from '@angular/core';

import { CartItem } from '../model/cartitem';
import { IProduct } from '../../product/interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Array<CartItem> = [];

  constructor() { }

  getCartItem(): Array<CartItem> {
    return this.cartItems;
  }

  addProductToCart(product: IProduct): void {
    const cartItem = new CartItem();
    cartItem.count = 1;
    cartItem.product = product;
    this.cartItems.push(cartItem);
  }

  removeProductFromCart(cartItem: CartItem): void {
    const index = this.cartItems.indexOf(cartItem, 0);
    this.cartItems.splice(index, 1);
  }
}
