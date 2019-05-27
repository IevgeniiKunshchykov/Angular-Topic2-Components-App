import { Injectable } from '@angular/core';
import { IOrder } from '../interfaces/ioder';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
 
  private orders: Array<IOrder> = [];  
  private ordersSubject: Subject<IOrder[]> = new Subject<IOrder[]>();    
  private orders$: Observable<IOrder[]> = this.ordersSubject.asObservable();

  constructor() { }

  getOrders():Observable<IOrder[]>{
    return this.orders$;
  }

  makeOrder(order: IOrder) {

    console.log(order);

    this.orders.push(order);
    this.ordersSubject.next(this.orders);
  }
}
