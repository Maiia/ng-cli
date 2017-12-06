import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ROUTER_SETTINGS } from './app.routes';

// external application modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Application modules
import { FooterModule, HeaderModule, LoadingIndicatorModule, ValidationModule } from './shared';

// custom directives

// custom pipes

// services
import { Interceptor, LoadingService, APP_RESOLVER_PROVIDERS, AuthGuard, AuthService, ProductsService } from './services';

// redux
import { StoreModule, ActionReducerMap, ActionReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { rootReducer } from "./store/reducers";
import { effects } from './store/effects';

// App is our top level component
import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password';

@NgModule({
  declarations: [ 
    AppComponent,
    NoContentComponent,
    ProfileComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTER_SETTINGS,    
    NgbModule.forRoot(),

    HeaderModule,
    FooterModule,
    ValidationModule,
    LoadingIndicatorModule,
    
    // redux
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot(effects)
  ],
  
  // exports:[ ResetPasswordComponent ],
  providers: [
    FormBuilder,
    LoadingService,
    ProductsService,
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
