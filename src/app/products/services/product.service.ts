import { Injectable } from '@angular/core';

import { IProduct } from '../interfaces/iproduct';
import { Product } from '../models/product';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private counter = 1;
  
  private productsSubj: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>(this.getStorageProducts());

  constructor() {
    const product1 = new Product();
    product1.id = this.counter++;
    product1.name = 'Bread';
    product1.isAvailable = false;
    product1.price = 5;
    product1.producer = 3;
    product1.ingredients = ['Egg', 'Dough'];
    product1.comments = ['Good', 'Soft', 'Dirty :('];

    const product2 = new Product();
    product2.id = this.counter++;
    product2.name = 'Cola';
    product2.isAvailable = true;
    product2.price = 4;
    product2.producer = 1;
    product2.ingredients = ['Water', 'Smth Black'];
    product2.comments = ['Very sweet', 'So black :)'];

    const product3 = new Product();
    product3.id = this.counter++;
    product3.name = 'Milk';
    product3.isAvailable = true;
    product3.price = 3;
    product3.producer = 2;
    product3.ingredients = ['Milk'];
    product3.comments = ['Best ever', 'Very fresh'];

    localStorage.setItem(product1.id.toString(), JSON.stringify(product1));
    localStorage.setItem(product2.id.toString(), JSON.stringify(product2));
    localStorage.setItem(product3.id.toString(), JSON.stringify(product3));
  }

  getProducts(): Observable<Array<IProduct>> {
    return this.productsSubj.asObservable();
  }

  getProduct(id: number): IProduct {
    return JSON.parse(localStorage.getItem(id.toString()));
  }

  createProduct(product: IProduct): void {
    product.id = this.counter++;
    localStorage.setItem(product.id.toString(), JSON.stringify(product));
    this.productsSubj.next(this.getStorageProducts());
  }

  updateProduct(product: IProduct) {
    localStorage.setItem(product.id.toString(), JSON.stringify(product));
    this.productsSubj.next(this.getStorageProducts());
  }

  private getStorageProducts(): IProduct[] {
    const products: IProduct[] = [];

    for (let i = 1; i < localStorage.length; i++) {
      products.push(JSON.parse(localStorage.getItem(i.toString())));
    }

    console.log(products);
    return products;
  }
}
