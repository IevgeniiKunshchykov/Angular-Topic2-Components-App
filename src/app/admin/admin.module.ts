import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ProductsAdminComponent } from './components/products-admin/products-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsModule } from '../products/products.module';
import { OrdersModule } from '../orders/orders.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from '../core/+store/products/products.effects';
import { productsReducer } from '../core/+store';

@NgModule({
  declarations: [AdminComponent, ProductsAdminComponent],
  imports: [
    CommonModule,
    ProductsModule,
    OrdersModule,
    AdminRoutingModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ]
})
export class AdminModule { }
