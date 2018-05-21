import { Location } from "@angular/common";
import { TestBed, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { AppComponent } from './app.component'
import { HomeComponent } from './home';
import { ProductsComponent } from './products';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';
import { appRoutes } from './app.routes'
import * as fromServices from './services';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store';

import { Title } from '@angular/platform-browser';
import { ProfileModule } from './+profile/profile.module'
import { AuthService } from "./services";

export class MockAuthService {
  checkLogin(): Boolean {
    return true;
  }

  login(): Boolean {
    return true;
  }

  logout(): void {
    return;
  }
}

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        ReactiveFormsModule,
        NgbModule.forRoot(),
        StoreModule.forRoot(fromStore.reducers), 
        RouterTestingModule.withRoutes(appRoutes),
        HttpClientTestingModule
      ],
      declarations: [ 
        AppComponent,
        HomeComponent,
        ProductsComponent,
        LoginComponent,
        NoContentComponent
      ],
      providers:[
        {
          provide: AuthService,
          useClass: MockAuthService
        },
        fromStore.ProductsGuard,
        ...fromServices.services
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  beforeEach(() => {
    router = TestBed.get(Router); 
    location = TestBed.get(Location); 

    fixture = TestBed.createComponent(AppComponent); 
    router.initialNavigation(); 
  })

  it('should create router', () => {
    expect(router).toBeTruthy();
  });

  it('navigate to "404" takes you to /404', () => {
    router.navigate(['/404']).then(() => {
      expect(location.path()).toBe('/404');
    })
  });

  it('navigate to "login" takes you to /login', () => {
    router.navigate(['/login']).then(() => {
      expect(location.path()).toBe('/login');
    })
  });

  it('navigate to "root" takes you to /', () => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/');
    })
  });

  it('navigate to "profile" takes you to /profile', fakeAsync(() => {  
    const loader = TestBed.get(NgModuleFactoryLoader);
    loader.stubbedModules = { lazyModule: ProfileModule };
  
    router.resetConfig([{
      path: 'profile', loadChildren: 'lazyModule' 
    }]);
  
    router.navigate(['profile']).then(() => {
      expect(location.path()).toBe('/profile');
    });
  }));

  it('navigate to "products" takes you to /products', () => {
    router.navigate(['products']).then(() => {
      expect(location.path()).toBe('/products');
    })
  });
});