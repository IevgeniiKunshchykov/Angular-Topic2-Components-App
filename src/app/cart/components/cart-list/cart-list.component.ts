import { Component, Input, DoCheck, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';
import { Subscription, Observable } from 'rxjs';
import { OrdersService } from 'src/app/orders/services/orders.service';
import { IOrder } from 'src/app/orders/interfaces/ioder';
import { IOrderItem } from 'src/app/orders/interfaces/iorderitem';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { CustomValidators } from '../validators/country-code-phone.validator';
import { IUser } from 'src/app/core/models/iuser';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy, DoCheck {

  userForm: FormGroup;
  cartItems: Array<CartItem> = [];

  totalPrice: number;
  totalCount: number;

  nameValidationMessage: string;

  private nameValidationMessageMap = {
    required: 'Please enter name.',
    minlength: 'The name must be longer than 3 characters.',
    maxlength: 'The name must be less than 32 characters.'
  };


  private sub: Subscription = new Subscription();

  constructor(
    private cartService: CartService,
    private orderService: OrdersService,
    private router: Router,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // основная подписка
    this.sub.add(this.cartService.getCartItems().subscribe(x => {
      this.cartItems = x;
    }));

    // дочерние
    this.sub.add(this.cartService.getCartInfo().subscribe(x => {
      this.totalCount = x.totalCount;
      this.totalPrice = x.totalPrice;
    }));

    this.buildForm();
  }

  private buildForm() {
    this.userForm = this.fb.group({
      name: this.fb.control('', { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(32)], updateOn: 'blur' }),
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.email]],
      contacts: this.fb.array([this.buildPhoneGroup()])
    });
  }

  private buildPhoneGroup(): FormControl {
    return this.fb.control('', { validators: [Validators.required, CustomValidators.phoneCountryCode('+38')], updateOn: 'blur' });
  }

  addPhoneGroup() {
    return (this.userForm.get('contacts') as FormArray).push(this.buildPhoneGroup());
  }

  removePhone(phone: any) {
    const contacts = (this.userForm.get('contacts') as FormArray);
    contacts.removeAt(contacts.value.findIndex(x => x === phone.value));
  }

  private setNameValidationMessage() {
    const nameControl = this.userForm.get('name');

    this.nameValidationMessage = '';

    if ((nameControl.touched || nameControl.dirty) && nameControl.errors) {
      this.nameValidationMessage = Object.keys(nameControl.errors)
        .map(key => this.nameValidationMessageMap[key])
        .join(' ');
    }
  }

  buy() {
    const order: IOrder = {
      orderItems: [],
      user: {
        email: this.userForm.get('email').value,
        name: this.userForm.get('name').value,
        phone: this.userForm.get('phone').value
      },
      id: undefined
    };

    for (const cartItem of this.cartItems) {
      const orderItem: IOrderItem = {
        name: cartItem.product.name,
        count: cartItem.count,
        price: cartItem.product.price * cartItem.count
      };

      order.orderItems.push(orderItem);
    }

    this.orderService.makeOrder(order)
      .subscribe(o => {
        this.cartService.clearCart();
        this.router.navigate(['orders']);
      },
        error => console.log(error));
  }

  ngDoCheck(): void {
    this.cartService.refreshCartInfo();
  }

  removeCartItem(cartItem: CartItem) {
    this.cartService.removeProductFromCart(cartItem);
  }

  increaseCount(cartItem: CartItem) {
    this.cartService.increaseCount(cartItem.id);
  }

  decreaseCount(cartItem: CartItem) {
    this.cartService.decreaseCount(cartItem.id);
  }

  ngOnDestroy(): void {
    // отписка от основной и дочерних
    this.sub.unsubscribe();
  }

  goProductList() {
    this.router.navigate(['product-list']);
  }
}
