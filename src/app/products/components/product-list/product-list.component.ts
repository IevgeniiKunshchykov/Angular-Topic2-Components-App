import { Component, EventEmitter, Input, ChangeDetectionStrategy, Output } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {

  @Input() products: Observable<Array<IProduct>>;

  constructor(private cartService: CartService) { }

  addToCart(product: IProduct): void {
    this.cartService.addProductToCart(product);    
  }
}

