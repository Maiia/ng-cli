import { Action } from '@ngrx/store';

// counter actions
export const INCREMENT_COUNTER = '[Counter] INCREMENT_COUNTER';
export const DECREMENT_COUNTER = '[Counter] DECREMENT_COUNTER';
export const RESET_COUNTER = '[Counter] RESET_COUNTER';

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

export type COUNTER
= Incremet
| Decrement
| Reset