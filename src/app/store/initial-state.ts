import { iCounter } from './models/counter.model';
import { iLogin } from './models/login.model';
import { iProducts } from './models/products.model';

export interface IAppState {
  login: iLogin,
  counter: iCounter;
  products: iProducts
};