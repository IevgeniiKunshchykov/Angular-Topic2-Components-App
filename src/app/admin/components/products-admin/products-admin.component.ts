import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/services/product.service';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/products/interfaces/iproduct';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit {

  products$: Promise<Array<IProduct>>;

  private navigationExtras: NavigationExtras = {
    relativeTo: this.route
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  edit(product: IProduct) {
    this.router.navigate(['edit/', product.id], this.navigationExtras);
  }

  addProduct() {
    this.router.navigate(['add'], this.navigationExtras);
  }
}
