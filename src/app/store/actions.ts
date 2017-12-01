import { Action } from '@ngrx/store';

// counter actions
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

// login
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

// products
export const GET_PRODUCTS = 'GET_PRODUCTS';

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

export class GetProducts implements Action {
  readonly type = GET_PRODUCTS;
  constructor(public payload: Object) {}
}

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

| GetProducts

| TriggerError