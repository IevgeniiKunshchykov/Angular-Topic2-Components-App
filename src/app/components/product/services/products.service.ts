import { Injectable } from '@angular/core';

import { IProduct } from '../interfaces/iproduct';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Array<IProduct> = [];

  constructor() {
    const product1 = new Product();
    product1.name = 'Bread';
    product1.isAvailable = true;
    product1.price = 2;
    product1.producer = 3;
    product1.ingredients = ['Egg', 'Dough'];

    const product2 = new Product();
    product2.name = 'Cola';
    product2.isAvailable = true;
    product2.price = 4;
    product2.producer = 1;
    product2.ingredients = ['Water', 'Smth Black'];

    this.products.push(product1, product2);
  }

  getProducts(): Array<IProduct> {
    return this.products;
  }

  createProduct(product: IProduct): void {
    this.products.push(product);
  }
}
