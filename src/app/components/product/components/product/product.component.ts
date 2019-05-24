import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../../model/product';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: IProduct;

  @Output()
  private createProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit() {
    this.product = new Product();
  }

  onAddIngredient(newIngredient: string): void {
    this.product.ingredients.push(newIngredient);
  }

  onCreateProduct(): void {
    console.log(this.product);
    this.createProduct.emit(this.product);
    this.product = new Product();
  }
}
