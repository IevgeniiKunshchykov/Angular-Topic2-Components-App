import { Component, EventEmitter, Input, ChangeDetectionStrategy, Output, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  products$: Observable<Array<IProduct>>;

  constructor(private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  addToCart(product: IProduct): void {
    this.cartService.addProductToCart(product);
  }
}

