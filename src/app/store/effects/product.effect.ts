import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as fromModels from '../models'
import { LOAD_PRODUCTS, loadProductsSuccess, TriggerError } from '../actions'
import { ProductsService } from '../../services';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}  

  @Effect()
  products$: Observable<Action> = this.actions$
    .ofType(LOAD_PRODUCTS)
    .mergeMap(action =>
      this.productService.getProducts()
      
      // If successful, dispatch success action with result
      .map((response: fromModels.iProducts) => {
        return new loadProductsSuccess(response)
      })

      // If request fails, dispatch failed action
      .catch((error) => of(new TriggerError(error)))
    );      
}