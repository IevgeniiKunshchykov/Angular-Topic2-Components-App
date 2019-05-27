import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { IProduct } from 'src/app/products/interfaces/iproduct';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cartItems: Array<CartItem> = [];

  private cartItems$: Observable<CartItem[]> = of(this.cartItems);

  constructor() { 
    
  }

  getCartItems(): Observable<Array<CartItem>> {
    return this.cartItems$;
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
