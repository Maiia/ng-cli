import { Action } from '@ngrx/store';

// login
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export class Login implements Action {
  readonly type = USER_LOGGED_IN;
  constructor(public payload: Object) {}
}

export class Logout implements Action {
  readonly type = USER_LOGGED_OUT;
  constructor(public payload: Object) {}
}

export type AUTH
= Login
| Logout