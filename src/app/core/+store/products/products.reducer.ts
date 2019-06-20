import { intitialProductsState, ProductsState, productsAdapter } from './products.state';
import { ProductsActions, ProductsActionTypes } from './products.actions';
import { IProduct } from 'src/app/products/interfaces/iproduct';

export function productsReducer(
    state = intitialProductsState,
    action: ProductsActions
): ProductsState {
    console.log(`Products Reducer: Action came in! ${action.type}`);

    switch (action.type) {

        case ProductsActionTypes.GET_PRODUCTS:
        case ProductsActionTypes.GET_PRODUCT: {
            return {
                ...state,
                loading: true
            };
        }

        case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
            const products = [...action.payload as IProduct[]];

            return productsAdapter.addAll(products, { ...state, loading: false, loaded: true });
        }

        case ProductsActionTypes.GET_PRODUCT_SUCCESS: {
            const product  = { ...action.payload as IProduct };
            return {
                ...state,
                loading: false,
                loaded: true,
                product
            };
        }

        case ProductsActionTypes.SET_PRODUCT: {
            const product = { ...action.payload as IProduct };

            return {
                ...state,
                product
            };
        }

        case ProductsActionTypes.GET_PRODUCTS_ERROR:
        case ProductsActionTypes.GET_PRODUCT_ERROR: {
            const error = action.payload;
            return {
                ...state,
                loading: false,
                loaded: false,
                error
            };
        }

        default: {
            return state;
        }
    }
}
