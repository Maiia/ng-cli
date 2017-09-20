import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home';
import { ProfileComponent } from './profile';
import { NoContentComponent } from './no-content';

import { ProjectResolver } from './services';

const appRoutes: Routes = [
  { path: '',         component: HomeComponent },
  { 
    path: 'profile',     
    component: ProfileComponent,
    resolve: {
      mails: ProjectResolver
    }
  },
  { path: '**',       component: NoContentComponent },
];

export const appRoutingProviders: any[] = [];
export const ROUTER_SETTINGS: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules });