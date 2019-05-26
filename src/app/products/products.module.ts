import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent, ProductComponent, ProductInfoComponent } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductListComponent, ProductComponent, ProductInfoComponent],
  imports: [
    CommonModule, FormsModule, SharedModule
  ],
  exports:[ProductListComponent]
})
export class ProductsModule { }
