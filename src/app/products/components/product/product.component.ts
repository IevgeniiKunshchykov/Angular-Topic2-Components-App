import { Component, OnInit } from '@angular/core';
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
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    if (this.route.snapshot.params.hasOwnProperty('readonly')) {
      this.readonly = this.route.snapshot.params.readonly.toLowerCase() === 'true';
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
    this.productService.updateProduct(p);
    this.router.navigate(['']);
  }

  cancel() {
    this.router.navigate(['']);
  }
}
