import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartListComponent, CartItemComponent } from './components'

@NgModule({
  declarations: [ CartListComponent, CartItemComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ CartListComponent ]
})
export class CartModule { }
