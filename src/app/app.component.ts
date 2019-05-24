import { Component, OnInit } from '@angular/core';
import { ProductsService } from './components/product/services/products.service';
import { CartService } from './components/cart/services/cart.service';
import { CartItem } from './components/cart/model/cartitem';
import { IProduct } from './components/product/interfaces/iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'shop';
  products: Array<IProduct> = [];
  cartItems: Array<CartItem> = [];

  constructor(private productsService: ProductsService, private cartService: CartService) {

  }

  ngOnInit(): void {
    this.loadProducts();
  }

  onCreateProduct(product: IProduct): void {
    this.productsService.createProduct(product);
    this.loadProducts();
  }

  onBuy(product: IProduct): void {
    this.cartService.addProductToCart(product);
    this.loadCartItems();
  }

  onDeleteFromCart(cartItem: CartItem) {
    this.cartService.removeProductFromCart(cartItem);
    this.loadCartItems();
  }

  private loadProducts() {
    this.products = this.productsService.getProducts();
  }

  private loadCartItems() {
    this.cartItems = this.cartService.getCartItem();
  }
}
