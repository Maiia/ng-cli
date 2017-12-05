import { createFeatureSelector } from '@ngrx/store';

import { iCounter } from './models/counter.model';
import { iLogin } from './models/login.model';
import { iProducts } from './models/products.model';
import { iError } from './models/error.model';

export interface IAppState {
  login: iLogin,
  counter: iCounter;
  products: iProducts;
  error: iError
};

// export Selectors
export const selectProductsState = createFeatureSelector<IAppState>('products');