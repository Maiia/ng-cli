import { routerReducer } from '@ngrx/router-store';

import { counterReducer } from "./counter.reducer";
import { loginReducer } from "./login.reducer";
import { productsReducer } from "./products.reducer";
import { errorReducer } from "./error.reducer";

export const reducers = {
  routerReducer: routerReducer,
  counter: counterReducer,
  login: loginReducer,
  products: productsReducer,
  error: errorReducer
}