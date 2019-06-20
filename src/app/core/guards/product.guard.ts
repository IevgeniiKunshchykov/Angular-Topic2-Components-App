import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/products/interfaces/iproduct';
import { AppState, SetProduct } from '../+store';
import { Store, select } from '@ngrx/store';
import { getProductByUrl } from '../+store/products/products.selectors';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<IProduct> {

  constructor(private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProduct | Observable<IProduct> | Promise<IProduct> {
    return this.store.pipe(
      select(getProductByUrl),
      tap(product => this.store.dispatch(new SetProduct(product))),
      take(1));
  }
}
