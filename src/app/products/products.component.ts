import { Component, OnInit } from '@angular/core';
// import { ProductsService } from '../services'
import { Store  } from '@ngrx/store';
// import * as Products from '../store/actions';
import { loadProducts } from '../store/actions';
import { IAppState, selectProductsState } from '../store/initial-state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  public products$: Observable<any>;

  constructor(
    // public productsService: ProductsService,
    private store: Store<IAppState>
  ) {
    this.products$ = this.store.select(selectProductsState)
  }

  ngOnInit() {
    // this.productsService.getProducts().subscribe(data => {
      this.store.dispatch(new loadProducts());
    // })
  }

  getRandomInt(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
