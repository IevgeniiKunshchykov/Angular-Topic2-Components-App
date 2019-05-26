import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;
  @Output() removeCartItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  countWheelTurned(event: WheelEvent){
    console.log(event);
    if(event.deltaY < 0)
    {
      this.cartItem.count += 1;
    }
    
    if(event.deltaY > 0)
    {
      this.cartItem.count -= 1;
    }
  }

  validateCount(){
    if(this.cartItem.count < 1)
    {
      this.cartItem.count = 1;
    }
  }

  removeFromCart(){
    this.removeCartItem.emit(this.cartItem);
  }
}
