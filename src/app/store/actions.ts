import { Action } from '@ngrx/store';

// counter actions
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

// login
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

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

export type All
= Incremet
| Decrement
| Reset

| Login
| Logout