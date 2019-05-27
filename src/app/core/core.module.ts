import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/services/cart.service';
import { ProductService } from '../products/services/product.service';
import { OrdersService } from '../orders/services/orders.service';

@NgModule({
  declarations: [],
  providers:[CartService, ProductService, OrdersService],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
