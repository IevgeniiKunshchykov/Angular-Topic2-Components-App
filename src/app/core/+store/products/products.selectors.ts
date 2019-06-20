import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';
import { getRouterState } from '../router/router.selectors';
import { Product } from 'src/app/products/models/product';

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const getProductsEntities = createSelector(getProductsState, (state: ProductsState) => state.entities);
export const getProducts = createSelector(getProductsEntities, entities => {
  return Object.keys(entities).map(id => entities[+id]);
});
export const getProduct = createSelector(getProductsState, (state: ProductsState) => state.product);
export const getProductsError = createSelector(getProductsState, (state: ProductsState) => state.error);
export const getProductsLoaded = createSelector(getProductsState, (state: ProductsState) => state.loaded);

export const getProductByUrl = createSelector(
  getProductsEntities,
  getRouterState,
  (products, router): Product => {
    const id = router.state.params.id;
    if (!id) {
      return new Product();
    } else {
      console.log(products[id]);
      return products[id];
    }
  });
