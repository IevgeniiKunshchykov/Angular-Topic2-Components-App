import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));


    it(`should have as title 'shop'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        expect(app.apptitle.nativeElement.innerText).toEqual('Shop');
    });

    it(`should have 5 navigate menu ites`, () => {
        const fixture = TestBed.createComponent(AppComponent);

        const menuItems = fixture.debugElement.query(By.css('.navbar-nav')).children;
        expect(menuItems.length).toEqual(5);

        expect(((menuItems[0].nativeElement as HTMLElement).querySelector('a') as HTMLElement).innerText).toEqual('Products');
        expect(((menuItems[1].nativeElement as HTMLElement).querySelector('a') as HTMLElement).innerText).toEqual('Cart');
        expect(((menuItems[2].nativeElement as HTMLElement).querySelector('a') as HTMLElement).innerText).toEqual('About');
        expect(((menuItems[3].nativeElement as HTMLElement).querySelector('a') as HTMLElement).innerText).toEqual('Admin');
        expect(((menuItems[4].nativeElement as HTMLElement).querySelector('a') as HTMLElement).innerText).toEqual('Login');
    });
});
