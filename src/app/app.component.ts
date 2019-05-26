import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ProductService } from './products/services/product.service';
import { CartService } from './cart/services/cart.service';
import { Observable } from 'rxjs';
import { IProduct } from './products/interfaces/iproduct';
import { CartItem } from './cart/models/cart-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('appTitle') apptitle: ElementRef;

  products: Observable<Array<IProduct>>;

  constructor(private productService: ProductService) {
  }
  
  ngOnInit() {
    this.products = this.productService.getProducts();
  } 
  
  ngAfterViewInit(): void {
    this.apptitle.nativeElement.innerText = 'Shop';
  }
}
