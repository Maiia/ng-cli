import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ROUTER_SETTINGS } from './app.routes';

// external application modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Application modules
import { FooterModule, HeaderModule, LoadingIndicatorModule } from './shared';

// custom directives

// custom pipes

// services
import { Interceptor, LoadingService, APP_RESOLVER_PROVIDERS, AuthGuard, AuthService } from './services';

// redux
import { rootReducer } from "./store/reducers/index";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// App is our top level component
import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ 
    AppComponent,
    NoContentComponent,
    ProfileComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ROUTER_SETTINGS,    
    NgbModule.forRoot(),

    HeaderModule,
    FooterModule,
    LoadingIndicatorModule,

    // redux
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({ maxAge: 10 })
  ],
  providers: [
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
    ...APP_RESOLVER_PROVIDERS,
    AuthGuard, 
    AuthService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { 
  constructor(
    public appRef: ApplicationRef
  ){}
}
