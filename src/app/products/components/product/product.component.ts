import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: IProduct;

  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (!id) {
      this.product = new Product();
    } else {
      this.product = this.productService.getProduct(+id);
    }
  }
}
