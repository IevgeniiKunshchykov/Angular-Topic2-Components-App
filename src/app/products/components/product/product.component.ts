import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct

  @Output() addToCartEvent: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit() {
  }

  addToCart(product: IProduct) {
    this.addToCartEvent.emit(product);
  }
}
