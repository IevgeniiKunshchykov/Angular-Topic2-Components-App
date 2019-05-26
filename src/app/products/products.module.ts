import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent, ProductComponent, ProductInfoComponent } from './components';

@NgModule({
  declarations: [ProductListComponent, ProductComponent, ProductInfoComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[ProductListComponent]
})
export class ProductsModule { }
