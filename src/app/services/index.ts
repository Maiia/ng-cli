export * from './loading.service';
export * from './http.interceptor';
export * from './app.resolver.service';
export * from './auth.service';
export * from './auth-guard.service';
export * from './validation.service';
export * from './product.service';

import { LoadingService } from './loading.service';
import { APP_RESOLVER_PROVIDERS } from './app.resolver.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { ValidationService } from './validation.service';
import { ProductsService } from './product.service';

export const services: any[] = [ LoadingService, ...APP_RESOLVER_PROVIDERS, AuthGuard, AuthService, ValidationService, ProductsService ];
