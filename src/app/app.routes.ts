import { Routes } from '@angular/router';
import { AuthGuard } from './services';

import * as fromStore from './store';

import { HomeComponent } from './home';
import { ProductsComponent } from './products';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';
import { FormlyComponent } from './formly';
import { ngxChartComponent } from './ngx-chart';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'formly', component: FormlyComponent },
  { path: 'bilboard', component: ngxChartComponent },
  { path: 'profile', loadChildren: './+profile#ProfileModule' },
  { path: 'products', component: ProductsComponent, canActivate: [ fromStore.ProductsGuard ] },
  { path: '**', component: NoContentComponent, canActivate: [ AuthGuard ] },
];
