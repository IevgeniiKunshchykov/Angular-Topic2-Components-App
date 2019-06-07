import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  @Input() product: IProduct;

  @Output() addToCartEvent: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  @Output() showCommentsEvent: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  @Output() showDetailedInfoEvent: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  @Output() editEvent: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit() {
  }

  addToCart(product: IProduct) {
    this.addToCartEvent.emit(product);
  }

  showComments(product: IProduct) {
    this.showCommentsEvent.emit(product);
  }

  showDetailedInfo(product: IProduct) {
    this.showDetailedInfoEvent.emit(product);
  }

  edit(product: IProduct) {
    this.editEvent.emit(product);
  }
}
