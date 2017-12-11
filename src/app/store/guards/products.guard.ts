import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

import { selectProductsState, IAppState } from '../initial-state'
import { loadProducts } from '../actions'

@Injectable()
export class ProductsGuard implements CanActivate {
  constructor(private store: Store<IAppState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore()
    .switchMap(() => of(true))
    .catch(() => of(false));
  }
  
  checkStore(): Observable<any> {
    return this.store
      .select(selectProductsState)
      .do((data: any) => {
        if (!data.length) {
          this.store.dispatch(new loadProducts());
        }
      })
      .filter((data: any) => data.length)
      .take(1);
  }
}