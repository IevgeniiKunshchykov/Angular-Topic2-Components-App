import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { IProduct } from 'src/app/products/interfaces/iproduct';

export interface ProductsState extends EntityState<IProduct> {
    readonly product: IProduct;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
}

export const productsAdapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>();

export const intitialProductsState: ProductsState = productsAdapter.getInitialState({
    product: null,
    loading: false,
    loaded: false,
    error: null
});
