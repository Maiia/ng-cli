import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { ProductsService } from '../../services';
import { iProducts } from '../models/products.model'

import * as ProductsActions from '../actions';
export type Action = ProductsActions.All;

@Injectable()
export class ProductEffects {
  @Effect() products$: Observable<Action> = this.actions$
    .ofType(ProductsActions.LOAD_PRODUCTS)
    .mergeMap(action =>
      this.productService.getProducts()
      
      // If successful, dispatch success action with result
      .map((response: iProducts) => {
        return new ProductsActions.loadProductsSuccess(response)
      })

      // If request fails, dispatch failed action
      .catch(() => of({ type: 'FAILED' }))
    );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}      
}