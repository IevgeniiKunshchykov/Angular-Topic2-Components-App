import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { IProduct } from 'src/app/products/interfaces/iproduct';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Array<CartItem> = [];
  private totalCount: Subject<number> = new Subject<number>();
  private totalPrice: Subject<number> = new Subject<number>();
  private cartItemsSubject: Subject<CartItem[]> = new Subject<CartItem[]>();
  private cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();
  private totalCount$: Observable<number> = this.totalCount.asObservable();
  private totalPrice$: Observable<number> = this.totalPrice.asObservable();

  private counter= 0;

  constructor() {
  }

  getCartItems(): Observable<Array<CartItem>> {
    return this.cartItems$;
  }

  addProductToCart(product: IProduct): void {

    this.counter++;
    const cartItem = new CartItem();
    cartItem.id = this.counter;
    cartItem.count = 1;
    cartItem.product = product;

    this.cartItems.push(cartItem);

    this.cartItemsSubject.next(this.cartItems);
    this.refreshTotalCount();
    this.refreshTotalPrice();
  }

  removeProductFromCart(cartItem: CartItem): void {
    const index = this.cartItems.indexOf(cartItem, 0);
    this.cartItems.splice(index, 1);
    this.counter--;

    this.cartItemsSubject.next(this.cartItems);
    this.refreshTotalCount();
    this.refreshTotalPrice();
  }

  increaseCount(id: number) {
    this.cartItems[this.cartItems.findIndex(x => x.id === id)].count++;
  }

  decreaseCount(id: number) {
    this.cartItems[this.cartItems.findIndex(x => x.id === id)].count--;
  }

  getTotalCount(): Observable<number> {
    return this.totalCount$;
  }

  getTotalPrice(): Observable<number> {
    return this.totalPrice$;
  }

  refreshTotalCount() {
    let count = 0;
    for (const cartItem of this.cartItems) {
      count += cartItem.count;
    }

    this.totalCount.next(count);
  }

  refreshTotalPrice() {
    let price = 0;
    for (const cartItem of this.cartItems) {
      price += cartItem.count * cartItem.product.price;
    }

    this.totalPrice.next(price);
  }

  clearCart() {
    this.counter = 0;
    this.cartItems.splice(0, this.cartItems.length);
    this.refreshTotalCount();
    this.refreshTotalPrice();
  }
}
