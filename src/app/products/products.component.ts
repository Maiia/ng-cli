import { Component, OnInit, HostBinding } from '@angular/core';
import { Store  } from '@ngrx/store';
import * as fromStore from '../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'Host-Binding-Test-Class'
  public products$: Observable<any>;

  constructor(
    private store: Store<fromStore.IAppState>
  ) {
    this.products$ = this.store.select(fromStore.selectProductsState)
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.loadProducts());
  }

  getRandomInt(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
