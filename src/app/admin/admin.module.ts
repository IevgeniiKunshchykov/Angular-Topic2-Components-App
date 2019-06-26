import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ProductsAdminComponent } from './components/products-admin/products-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsModule } from '../products/products.module';
import { OrdersModule } from '../orders/orders.module';

@NgModule({
  declarations: [AdminComponent, ProductsAdminComponent],
  imports: [
    CommonModule,
    ProductsModule,
    OrdersModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
