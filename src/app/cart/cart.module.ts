import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartListComponent, CartItemComponent } from './components'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ CartListComponent, CartItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports:[ CartListComponent ]
})
export class CartModule { }
