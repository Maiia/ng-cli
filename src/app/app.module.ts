import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

// external application modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './+material';

// Application modules
import * as fromShared from './shared';

// custom directives
import * as fromDirectives from './directives';

// custom pipes
import * as fromPipes from './pipes';

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
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password';

@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    ResetPasswordComponent,
    ...fromPipes.pipes
  ],
  imports: [
    // angular modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // material module
    MaterialModule,

    NgbModule.forRoot(),
    ...fromShared.modules,

    // @ngrx
    StoreModule.forRoot(fromStore.reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot(fromStore.effects),

    // app module
    RouterModule.forRoot(appRoutes, {
      useHash: Boolean(history.pushState) === false,
      // preloadingStrategy: PreloadAllModules
    })
  ],

  // exports:[ ResetPasswordComponent ],
  providers: [
    FormBuilder,
    { provide: RouterStateSerializer, useClass: fromStore.CustomSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: fromServices.Interceptor, multi: true },
    ...fromServices.services,
    ...fromStore.guards
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(
    public appRef: ApplicationRef
  ) {}
}
