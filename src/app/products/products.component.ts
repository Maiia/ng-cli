import { Component, OnInit } from '@angular/core';
import { Store  } from '@ngrx/store';
import { IAppState, selectProductsState, loadProducts } from '../store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  public products$: Observable<any>;

  constructor(
    private store: Store<IAppState>
  ) {
    this.products$ = this.store.select(selectProductsState)
  }

  ngOnInit() {
    this.store.dispatch(new loadProducts());
  }

  getRandomInt(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
