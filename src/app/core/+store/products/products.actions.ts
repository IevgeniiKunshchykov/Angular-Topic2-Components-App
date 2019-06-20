import { Action } from '@ngrx/store';
import { Product } from 'src/app/products/models/product';
import { IProduct } from 'src/app/products/interfaces/iproduct';

export enum ProductsActionTypes {
    GET_PRODUCTS = '[Products] GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS = '[Products] GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_ERROR = '[Products] GET_PRODUCTS_ERROR',
    GET_PRODUCT = '[Products] GET_PRODUCT',
    GET_PRODUCT_SUCCESS = '[Products] GET_PRODUCT_SUCCESS',
    GET_PRODUCT_ERROR = '[Products] GET_PRODUCT_ERROR',
    SET_PRODUCT = '[Products] SET_PRODUCT'    
}

export class GetProducts implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCTS;
}

export class GetProductsSuccess implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) { }
}

export class GetProductsError implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCTS_ERROR;
    constructor(public payload: Error | string) { }
}

export class GetProduct implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCT;
}

export class GetProductSuccess implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCT_SUCCESS;
    constructor(public payload: Product) { }
}

export class GetProductError implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCT_ERROR;
    constructor(public payload: Error | string) { }
}

export class SetProduct implements Action {
    readonly type = ProductsActionTypes.SET_PRODUCT;
    constructor(public payload: IProduct) {}
  }

export type ProductsActions
    = GetProducts
    | GetProductsSuccess
    | GetProductsError
    | GetProduct
    | GetProductSuccess
    | GetProductError
    | SetProduct;
