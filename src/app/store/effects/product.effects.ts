import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as fromModels from '../models'
import * as fromActions from '../actions'
import { ProductsService } from '../../services';
import { iProducts } from '../models';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}  

  @Effect()
  loadProducts$: Observable<Action> = this.actions$
    .ofType(fromActions.LOAD_PRODUCTS)
    .switchMap(() =>
      this.productService.getProducts()
      
      // If successful, dispatch success action with result
      .map((response: fromModels.iProducts) => {
        return new fromActions.loadProductsSuccess(response)
      })

      // If request fails, dispatch failed action
      .catch(error => of(new fromActions.TriggerError(error)))
    );   
    
    @Effect()
    redirect$: Observable<Action> = this.actions$
      .ofType(fromActions.LOAD_PRODUCTS_SUCCESS)
      .map((action: fromActions.loadProductsSuccess) => action.payload)
      .map(action => {
        if(confirm("are you sure")){
          return new fromActions.Go({ path: ['/404'] })
        } else {
          return new fromActions.Forward()
        }
      });
}