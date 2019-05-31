import { IProduct } from 'src/app/products/interfaces/iproduct';

export class CartItem {
    id: number;
    product: IProduct;
    count: number;
}
