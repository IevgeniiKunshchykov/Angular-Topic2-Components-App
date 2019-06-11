import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductService } from '../../services/product.service';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  sortField = 'price';
  sortOrder = true;
  products$: Observable<Array<IProduct>>;

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

  showDetailedInfoEvent(product: IProduct) {
    this.router.navigate(['products-list/info', product.id]);
  }

  editEvent(product: IProduct) {
    this.router.navigate(['admin/products/edit', product.id]);
  }

  goToCart() {
    this.router.navigate(['cart']);
  }
}
