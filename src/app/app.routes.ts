import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './services';

import { HomeComponent } from './home';
import { ProfileComponent } from './profile';
import { ProductsComponent } from './products';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';

import { ProfileResolver } from './services';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'products', component: ProductsComponent, canActivate: [ AuthGuard ] },
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolver
    },
    canActivate: [ AuthGuard ]
  },
  { path: '**', component: NoContentComponent },
];

export const appRoutingProviders: any[] = [];
export const ROUTER_SETTINGS: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules });