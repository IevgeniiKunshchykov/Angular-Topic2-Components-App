import { Injectable } from '@angular/core';

import { IProduct } from '../interfaces/iproduct';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products: Array<IProduct> = [];

  private products$: Promise<IProduct[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.products);
    }, 1000);
  });
  constructor() {
    const product1 = new Product();
    product1.id = 1;
    product1.name = 'Bread';
    product1.isAvailable = false;
    product1.price = 5;
    product1.producer = 3;
    product1.ingredients = ['Egg', 'Dough'];
    product1.comments = ['Good', 'Soft', 'Dirty :(']

    const product2 = new Product();
    product2.id = 2;
    product2.name = 'Cola';
    product2.isAvailable = true;
    product2.price = 4;
    product2.producer = 1;
    product2.ingredients = ['Water', 'Smth Black'];
    product2.comments = ['Very sweet', 'So black :)']

    const product3 = new Product();
    product3.id = 3;
    product3.name = 'Milk';
    product3.isAvailable = true;
    product3.price = 3;
    product3.producer = 2;
    product3.ingredients = ['Milk'];
    product3.comments = ['Best ever', 'Very fresh'];

    this.products.push(product1, product2, product3);
  }

  getProducts(): Promise<Array<IProduct>> {
    return this.products$;
  }

  getProduct(id: number): IProduct {
    return this.products.find(x=> x.id === id);
  }

  createProduct(product: IProduct): void {
    this.products.push(product);
  }
}
