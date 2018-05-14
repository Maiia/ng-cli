import { ProductsService } from './product.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProductsService:', () => {
    let service: ProductsService;
    let httpMock: HttpTestingController;
    const productsData = { 
        email:"Heath_Toy3@hotmail.com",
        name:"Jamil Skiles",
        phone:"548-827-9189",
        username:"Elda.Gislason",
        website:"israel.biz"
    };
    
    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [ProductsService]
        });

        service = TestBed.get(ProductsService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should get list of products', () => {
        service.getProducts().subscribe((data: any) => {
            expect(data).toBe(productsData);
        });

        const req = httpMock.expectOne(`http://localhost:3500/api`);
        expect(req.request.method).toBe('GET');

        req.flush(productsData);

        httpMock.verify();
    });
});