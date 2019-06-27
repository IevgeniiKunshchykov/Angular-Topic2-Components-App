
import { ProductService } from './product.service';
import { TestBed } from '@angular/core/testing';
import { IProduct } from '../interfaces/iproduct';

describe('ProductService Tests', () => {

    TestBed.configureTestingModule({
        providers: [ProductService]
    });

    it('Service should return not less than 3 products', (done: DoneFn) => {
        const service = new ProductService();
        service.getProducts()
            .subscribe(x => {
                expect(x.length).toBeGreaterThanOrEqual(3)
                done();
            });
    });

    it('Service should update product', () => {
        var service = TestBed.get(ProductService) as ProductService;

        var product = service.getProduct(3) as IProduct;
        product.name = "Updated Product"
        service.updateProduct(product);

        product = service.getProduct(3) as IProduct;
        expect(product.name).toBe("Updated Product");
    });
});
