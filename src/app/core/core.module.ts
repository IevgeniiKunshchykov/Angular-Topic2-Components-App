import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/services/cart.service';
import { ProductService } from '../products/services/product.service';
import { OrdersService } from '../orders/services/orders.service';
import { ConstantsService } from './services/constants.service';
import { GeneratorService } from './services/generator.service';
import { GeneratorServiceFactory } from './services/generator.factory';

@NgModule({
  declarations: [],
  providers: [
    CartService,
    ProductService,
    OrdersService,
    {
      provide: ConstantsService,
      useValue: {
        app: 'TestApp',
        version: {
          full: '1.0.0'
        }
      }
    },
    {
      provide: GeneratorService,
      useFactory: GeneratorServiceFactory(100)
    }
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
