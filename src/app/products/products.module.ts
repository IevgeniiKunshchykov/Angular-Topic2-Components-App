import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent, ProductComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { ProductCommentsComponent } from './product-comments/product-comments.component';

@NgModule({
  declarations: [ProductListComponent, ProductComponent, ProductCommentsComponent],
  imports: [
    CommonModule, FormsModule, SharedModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
