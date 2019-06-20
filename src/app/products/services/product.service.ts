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

    const products: IProduct[] = [product1, product2, product3];
    this.setProductsToStorage(products);
  }

  getProducts(): Observable<Array<IProduct>> {
    return this.productsSubj.asObservable();
  }

  getProduct(id: number): IProduct {
    return this.getStorageProducts().find(x => x.id == id);
  }

  createProduct(product: IProduct): void {
    product.id = this.counter++;
    const products = this.getStorageProducts();
    products.push(product);
    this.setProductsToStorage(products);
    this.productsSubj.next(products);
  }

  updateProduct(product: IProduct) {
    const products = this.getStorageProducts();
    var index = products.findIndex(x => x.id == product.id);
    products[index] = product;
    this.setProductsToStorage(products);
    this.productsSubj.next(products);
  }

  private getStorageProducts(): IProduct[] {
    const products: IProduct[] = JSON.parse(localStorage.getItem('products'));
    return products;
  }

  private setProductsToStorage(products: IProduct[]) {
    localStorage.setItem('products', JSON.stringify(products));
  }
}
