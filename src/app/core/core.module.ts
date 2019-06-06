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
    // Этот сервис
    CartService,
    // и этот сервис
    ProductService,
    // и этот сервис не надо тут регистрировать.
    // Они саморегистрируемые сервисы через их декоратор.
    // Все остальные можно тут настроить
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
    // Надо добавить
    // GeneratorService
    {
      provide: GeneratorService,
      useFactory: GeneratorServiceFactory(100)
      // Надо добавить
      // deps: [GeneratorService]
    }
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
