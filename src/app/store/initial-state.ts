import { iCounter } from './models/counter.model';
import { iLogin } from './models/login.model';

export interface IAppState {
  login: iLogin,
  counter: iCounter;
};