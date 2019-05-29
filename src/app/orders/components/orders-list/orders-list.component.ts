import { Component, OnInit, OnDestroy } from '@angular/core';
import { IOrder } from '../../interfaces/ioder';
import { OrdersService } from '../../services/orders.service';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit, OnDestroy {

  orders: Array<IOrder> = [];
  totalCount: 0;
  totalPrice: 0;

  private sub: Subscription;

  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.sub = this.orderService.getOrders().subscribe( x => {
        this.orders = x;

        this.totalCount = 0;
        this.totalPrice  = 0;
        for (const order of this.orders) {
          for (const orderItem of order.orderItems) {
            this.totalPrice += orderItem.count * orderItem.price;
            this.totalCount += orderItem.count;
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
