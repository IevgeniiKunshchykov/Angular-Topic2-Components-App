import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IProduct } from '../../interfaces/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: IProduct;

  readonly = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (this.route.snapshot.url.find(x => x.path === 'info')) {
      this.readonly = true;
    }

    if (!id) {
      this.product = new Product();
    } else {
      this.product = { ...this.productService.getProduct(+id) };
    }
  }

  onAddIngredient(newIngredient: string): void {
    this.product.ingredients.push(newIngredient);
  }

  save(p: IProduct) {
    if (this.product.id) {
      this.productService.updateProduct(p);
    } else {
      this.productService.createProduct(p);
    }

    this.location.back();
  }

  cancel() {
    this.location.back();
  }
}
