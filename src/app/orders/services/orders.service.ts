import { Injectable } from '@angular/core';
import { IOrder } from '../interfaces/ioder';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private orders: Array<IOrder> = [];
  private orders$: Observable<IOrder[]> = of(this.orders);

  constructor() { }

  getOrders(): Observable<IOrder[]> {
    return this.orders$;
  }

  makeOrder(order: IOrder) {
    this.orders.push(order);
  }
}
