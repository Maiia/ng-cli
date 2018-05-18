import { ProductsService } from './product.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const mockData = { 
    email:"Heath_Toy3@hotmail.com",
    name:"Jamil Skiles",
    phone:"548-827-9189",
    username:"Elda.Gislason",
    website:"israel.biz"
};

describe('Service: ProductsService', () => {
    let service: ProductsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [ProductsService]
        });

        service = TestBed.get(ProductsService);
        httpMock = TestBed.get(HttpTestingController);
    });

    beforeEach(() => {
        this.mockData = mockData;
    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpMock.verify();
    })

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get list of products', () => {
        service.getProducts().subscribe((data: any) => {
            expect(data).toBe(this.mockData);
            expect(data.email).toBe('Heath_Toy3@hotmail.com');
        });

        const req = httpMock.expectOne(`http://localhost:3500/api`);
        expect(req.request.method).toBe('GET');

        req.flush(this.mockData);
    });
});