import { Action } from '@ngrx/store';
import { iProducts } from './models/products.model'

// counter actions
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

// login
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

// products
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_FAIL = 'LOAD_PRODUCTS_FAIL';

// error
export const HTTP_ERROR = 'HTTP_ERROR';

export class Incremet implements Action {
  readonly type = INCREMENT_COUNTER;
  constructor(public payload: number) {}
}

export class Decrement implements Action {
  readonly type = DECREMENT_COUNTER;
  constructor(public payload: number) {}
}

export class Reset implements Action {
  readonly type = RESET_COUNTER;
  constructor(public payload: number) {}
}

export class Login implements Action {
  readonly type = USER_LOGGED_IN;
  constructor(public payload: Object) {}
}

export class Logout implements Action {
  readonly type = USER_LOGGED_OUT;
  constructor(public payload: Object) {}
}

////////////////////////////////////////////////
export class loadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class loadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;
  constructor(public payload?: iProducts) {}
}

export class loadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;
  constructor(public payload?: iProducts) {}
}
///////////////////////////////////////////////

export class TriggerError implements Action {
  readonly type = HTTP_ERROR;
  constructor(public payload: Object) {}
}

export type All
= Incremet
| Decrement
| Reset

| Login
| Logout

| loadProducts
| loadProductsSuccess
| loadProductsFail

| TriggerError