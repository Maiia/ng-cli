import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, of, pipe } from 'rxjs';
import { switchMap, catchError, filter, take, tap } from 'rxjs/operators';

import { selectProductsState, IAppState } from '../initial-state'
import { loadProducts } from '../actions'

@Injectable()
export class ProductsGuard implements CanActivate {
  constructor(private store: Store<IAppState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore()
    .pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
  
  checkStore(): Observable<any> {
    return this.store
      .select(selectProductsState)
      .pipe(
        tap((data: any) => {
          if (!data.length) {
            this.store.dispatch(new loadProducts());
          }
        }),
        filter((data: any) => data.length),
        take(1)
      )
  }
}