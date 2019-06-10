import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { IProduct } from 'src/app/products/interfaces/iproduct';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartInfo = {
    totalCount: 0,
    totalPrice: 0
  }

  private cartItems: Array<CartItem> = [];
  private cartInfoSubj: Subject<any> = new Subject<any>();
  private cartItems$: Observable<CartItem[]> = of(this.cartItems);
  private cartInfo$: Observable<any> = this.cartInfoSubj.asObservable();//of(this.cartInfo);


  private counter = 0;

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

    this.refreshTotalCount();
    this.refreshTotalPrice();
  }

  removeProductFromCart(cartItem: CartItem): void {
    const index = this.cartItems.indexOf(cartItem, 0);
    this.cartItems.splice(index, 1);
    this.counter--;

    this.refreshTotalCount();
    this.refreshTotalPrice();
  }

  increaseCount(id: number) {
    this.cartItems[this.cartItems.findIndex(x => x.id === id)].count++;
    this.refreshCartInfo();
  }

  decreaseCount(id: number) {
    this.cartItems[this.cartItems.findIndex(x => x.id === id)].count--;
    this.refreshCartInfo();
  }

  getCartInfo(): Observable<any> {
    return this.cartInfo$;
  }

  refreshCartInfo() {
    this.refreshTotalCount();
    this.refreshTotalPrice();
    this.cartInfoSubj.next(this.cartInfo);
  }

  clearCart() {
    this.counter = 0;
    this.cartItems.splice(0, this.cartItems.length);
    this.refreshTotalCount();
    this.refreshTotalPrice();
  }

  private refreshTotalCount() {
    let count = 0;
    for (const cartItem of this.cartItems) {
      count += cartItem.count;
    }

    this.cartInfo.totalCount = count;
  }

  private refreshTotalPrice() {
    let price = 0;
    for (const cartItem of this.cartItems) {
      price += cartItem.count * cartItem.product.price;
    }

    this.cartInfo.totalPrice = price;
  }
}
