import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { IProduct } from 'src/app/products/interfaces/iproduct';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cartItemsSubjct: Subject<CartItem[]> = new Subject<CartItem[]>();
  private cartItems: Array<CartItem> = [];

  cartItems$ = this.cartItemsSubjct.asObservable();

  constructor() { 
    this.cartItemsSubjct.next(this.cartItems);
  }

  getCartItems(): Observable<Array<CartItem>> {
    var observable =  Observable.create(observer=>{
        observer.next(this.cartItems);
    });
    
    return observable;
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
