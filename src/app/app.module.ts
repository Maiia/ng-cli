import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ROUTER_SETTINGS } from './app.routes';

// external application modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Application modules
import * as fromSharedModules from './shared'

// custom directives

// custom pipes

// Application services
import * as fromServices from './services';

// @ngrx
import { StoreModule, ActionReducerMap, ActionReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import * as fromStore from './store';

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

    ...fromSharedModules.modules,
    
    // @ngrx
    StoreModule.forRoot(fromStore.reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot(fromStore.effects)
  ],
  
  // exports:[ ResetPasswordComponent ],
  providers: [
    FormBuilder,
    { provide: RouterStateSerializer, useClass: fromStore.CustomSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: fromServices.Interceptor, multi: true },
    ...fromServices.services
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { 
  constructor(
    public appRef: ApplicationRef
  ){}
}
