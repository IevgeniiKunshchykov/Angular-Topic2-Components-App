import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input()
  products: Array<IProduct> = [];

  @Output()
  private buy: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() { }

  onBuy(product: IProduct) {
    this.buy.emit(product);
  }
}
