import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/products/interfaces/iproduct';
import { ProductService } from 'src/app/products/services/product.service';
import { Product } from 'src/app/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<IProduct> {

  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProduct | Observable<IProduct> | Promise<IProduct> {
    const id = route.params.id;
    if (!id) {
      return new Product();
    } else {
      return { ...this.productService.getProduct(+id) };
    }
  }
}
