import { Action } from '@ngrx/store';
import { iProducts } from '../models'

// products
export const LOAD_PRODUCTS = '[Products] LOAD_PRODUCTS';
export const LOAD_PRODUCTS_SUCCESS = '[Products] LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_FAIL = '[Products] LOAD_PRODUCTS_FAIL';

export class loadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class loadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;
  constructor(public payload?: iProducts) {}
}

export class loadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;
  constructor(public payload?: iProducts) {}
}

export type PRODUCTS = 
  | loadProducts 
  | loadProductsSuccess 
  | loadProductsFail