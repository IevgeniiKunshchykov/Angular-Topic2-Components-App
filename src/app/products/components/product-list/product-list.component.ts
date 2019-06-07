import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductService } from '../../services/product.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  sortField = 'price';
  sortOrder = true;
  products$: Promise<Array<IProduct>>;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  addToCart(product: IProduct): void {
    this.cartService.addProductToCart(product);
  }

  showCommentsEvent(product: IProduct) {
    this.router.navigate([{ outlets: { comments: ['product-comments', { id: product.id }] } }]);
  }
}
