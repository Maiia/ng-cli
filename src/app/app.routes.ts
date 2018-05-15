import { Routes } from '@angular/router';
import { AuthGuard } from './services';

import * as fromStore from './store'

import { HomeComponent } from './home';
import { ProductsComponent } from './products';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'profile', loadChildren: './+profile#ProfileModule' },
  { path: 'products', component: ProductsComponent, canActivate: [ fromStore.ProductsGuard ] },
  { path: '**', component: NoContentComponent, canActivate: [ AuthGuard ] },
];