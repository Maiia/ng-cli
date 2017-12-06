import { Action } from '@ngrx/store';

export const HTTP_ERROR = 'HTTP_ERROR';

export class TriggerError implements Action {
  readonly type = HTTP_ERROR;
  constructor(public payload: Object) {}
}

export type ERROR
= TriggerError