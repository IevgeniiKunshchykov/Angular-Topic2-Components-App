import { Component, Input, DoCheck, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, DoCheck {
   
  cartItems: Array<CartItem> = [];

  totalPrice: number = 0;
  totalCount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(x=>{
      this.cartItems = x;
    });
  }  

  ngDoCheck(): void {    
    this.totalPrice = 0;
    this.totalCount = 0;
    for(let cartItem of this.cartItems){      
      this.totalPrice += cartItem.count * cartItem.product.price;
      this.totalCount += cartItem.count;
   }
  }

  removeCartItem(cartItem: CartItem){

  }
}
