import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { IAppState } from '../initial-state'

// reducers
import { counterReducer } from "./counter.reducer";
import { loginReducer } from "./login.reducer";
import { productsReducer } from "./products.reducer";
import { errorReducer } from "./error.reducer";

export const rootReducer = {
  routerReducer: routerReducer,
  counter: counterReducer,
  login: loginReducer,
  products: productsReducer,
  error: errorReducer
}