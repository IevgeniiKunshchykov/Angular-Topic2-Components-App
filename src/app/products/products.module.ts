import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent, ProductComponent, ProductCommentsComponent, ProductInfoComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../core/+store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from '../core/+store/products/products.effects';

@NgModule({
  declarations: [ProductListComponent, ProductComponent, ProductCommentsComponent, ProductInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  exports: [ProductListComponent, ProductComponent]
})
export class ProductsModule { }
