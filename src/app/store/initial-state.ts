import { createSelector, createFeatureSelector } from '@ngrx/store'
import { routerReducer, RouterReducerState }  from '@ngrx/router-store'
import { RouterStateUrl } from './custom-router-state-serializer'

import * as fromModels from './models';

export interface IAppState {
  routerReducer: RouterReducerState<RouterStateUrl>,
  login: fromModels.iLogin,
  counter: fromModels.iCounter,
  products: fromModels.iProducts,
  error: fromModels.iError
};

// export Selectors
export const selectProductsState = createFeatureSelector<IAppState>('products');
export const getCounterState = createSelector(createFeatureSelector<IAppState>('counter'), state => state.counter);
export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('routerReducer');