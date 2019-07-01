import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injectable } from '@angular/core';
import { CartListComponent, CartItemComponent } from '..';
import { CartService } from '../../services/cart.service';
import { OrdersService } from 'src/app/orders/services/orders.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Router, NavigationExtras } from '@angular/router';

@Injectable()
export class RouterStub {
    navigate(commands: any[], extras?: NavigationExtras) { }
}

describe('CartListComponent tests', () => {
    let fixture: ComponentFixture<CartListComponent>;
    let cartService: CartService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CartListComponent, CartItemComponent],
            imports: [FormsModule, ReactiveFormsModule, SharedModule, HttpClientModule],
            providers: [CartService, HttpClient, LocalStorageService, {
                provide: Router, useClass: RouterStub
            }]
        });

        fixture = TestBed.createComponent(CartListComponent);
        cartService = fixture.debugElement.injector.get(CartService);
    });

    it('should show cart is empty on load when cart is empty', async(() => {
        // Запускаем ngOnInit
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            // Запускаем передачу данных в шаблон
            fixture.detectChanges();

            expect(fixture.debugElement.query(By.css('.empty-cart')).nativeElement.textContent).toBe(' Cart is empty. ');
        });
    }));

    it('should show cart items when cart item is added', async(() => {
        // Запускаем ngOnInit
        fixture.detectChanges();

        cartService.addProductToCart({
            id: 1,
            comments: undefined,
            name: 'Test',
            price: 1,
            isAvailable: true,
            producer: undefined,
            description: undefined,
            ingredients: undefined
        });

        fixture.whenStable().then(() => {

            // Запускаем передачу данных в шаблон
            fixture.detectChanges();

            expect((fixture.debugElement.query(By.css('.cart-items')).nativeElement as HTMLElement).children.length).toBe(2);
        });
    }));
});
