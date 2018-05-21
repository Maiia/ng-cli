


import { Injectable } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as fromModels from '../models'
import * as fromActions from '../actions'
import { ProductsService } from '../../services';
import { iProducts } from '../models';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}  

  @Effect()
  loadProducts$: Observable<Action> = this.actions$
    .ofType(fromActions.LOAD_PRODUCTS)
    .pipe(
      switchMap(() =>
      this.productService.getProducts()
        .pipe(
          // If successful, dispatch success action with result
          map((response: fromModels.iProducts) => {
            return new fromActions.loadProductsSuccess(response)
          }),
          // If request fails, dispatch failed action
          catchError(error => of(new fromActions.TriggerError(error)))
        )
    ));   
    
    // @Effect()
    // redirect$: Observable<Action> = this.actions$
    //   .ofType(fromActions.LOAD_PRODUCTS_SUCCESS)
    //   .map((action: fromActions.loadProductsSuccess) => action.payload)
    //   .map(action => {
    //     if(confirm("are you sure")){
    //       return new fromActions.Go({ path: ['/404'] })
    //     } else {
    //       return new fromActions.Forward()
    //     }
    //   });
}