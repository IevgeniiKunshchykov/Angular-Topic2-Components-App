import { Injectable } from '@angular/core';

import { IProduct } from '../interfaces/iproduct';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Array<IProduct> = [];

  private products$: Observable<IProduct[]> = of(this.products);

  constructor() {
    const product1 = new Product();
    product1.name = 'Bread';
    product1.isAvailable = false;
    product1.price = 2;
    product1.producer = 3;
    product1.ingredients = ['Egg', 'Dough'];

    const product2 = new Product();
    product2.name = 'Cola';
    product2.isAvailable = true;
    product2.price = 4;
    product2.producer = 1;
    product2.ingredients = ['Water', 'Smth Black'];

    const product3 = new Product();
    product3.name = 'Milk';
    product3.isAvailable = true;
    product3.price = 3;
    product3.producer = 2;
    product3.ingredients = ['Milk'];

    this.products.push(product1, product2, product3);    
  }

  getProducts(): Observable<Array<IProduct>> {
    return this.products$;
  }

  createProduct(product: IProduct): void {
    this.products.push(product);
  }
}
