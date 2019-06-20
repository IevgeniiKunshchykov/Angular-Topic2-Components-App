import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/products/interfaces/iproduct';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, GetProducts } from 'src/app/core/+store';
import { getProducts } from 'src/app/core/+store/products/products.selectors';
import * as RouterActions from 'src/app/core/+store/router/router.actions';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit {

  products$: Observable<Array<IProduct>>;

  private navigationExtras: NavigationExtras = {
    relativeTo: this.route
  };

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(getProducts));
    this.store.dispatch(new GetProducts());
  }

  edit(product: IProduct) {
    this.store.dispatch(new RouterActions.Go({
      path: ['edit/', product.id],
      extras: this.navigationExtras
    }));
  }

  addProduct() {
    this.store.dispatch(new RouterActions.Go({
      path: ['add'],
      extras: this.navigationExtras
    }));
  }
}
