import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, FormBuilder, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { NgModule, ApplicationRef, Injector } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { FormControl } from '@angular/forms';

import { appRoutes } from './app.routes';

// external application modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './+material';

import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';

// Application modules
import * as fromShared from './shared';

// custom directives
import { UnderlineDirective } from './directives';

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
import { MyElementsComponent } from './elements/elements.component';
import { FormlyComponent } from './formly';
import { CustomFormlyComponent } from './formly-custom/custom-formly.component';

export function FirstNameValidator(control: FormControl): ValidationErrors {
  return control.value && control.value.length < 3 ? { 'first_name': true } : null;
}

export function FirstNameValidatorMessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" length is less that required`;
}

@NgModule({
   declarations: [
      AppComponent,
      NoContentComponent,
      HomeComponent,
      ProductsComponent,
      LoginComponent,
      MyElementsComponent,
      ResetPasswordComponent,
      FormlyComponent,
      CustomFormlyComponent,
      ...fromPipes.pipes,
      UnderlineDirective,
   ],
   imports: [
    // angular modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    FormlyModule.forRoot({
      types: [
        { name: 'custom', component: CustomFormlyComponent },
      ],
      validators: [ 
        { name: 'first_name', validation: FirstNameValidator },
      ],
      validationMessages: [
        { name: 'first_name', message: FirstNameValidatorMessage },
      ],
    }),
    FormlyMaterialModule,

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
  bootstrap: [ AppComponent ],
  entryComponents: [ MyElementsComponent ]
})

export class AppModule {
  constructor(
    public appRef: ApplicationRef,
    private injector: Injector
  ) {
    const customElement = createCustomElement(MyElementsComponent, { injector });
    customElements.define('app-elements', customElement);
  }
}
