import { Injectable } from '@angular/core';
import { ProductService } from 'src/app/products/services/product.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import * as ProductsActions from './products.actions';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) {
    }

    @Effect()
    getProducts$: Observable<Action> = this.actions$.pipe(
        ofType<ProductsActions.GetProducts>(ProductsActions.ProductsActionTypes.GET_PRODUCTS),
        switchMap((action: ProductsActions.GetProducts) =>
            this.productService
                .getProducts()
                .pipe(
                    map(products => new ProductsActions.GetProductsSuccess(products)),
                    catchError(err => of(new ProductsActions.GetProductsError(err)))
                )
        )
    );
}
