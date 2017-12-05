import { Component, OnInit } from '@angular/core';
// import { ProductsService } from '../services'
import { Store  } from '@ngrx/store';
import { IAppState } from '../store/initial-state';
// import * as Products from '../store/actions';
import { GetProducts } from '../store/actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  public products: any;

  constructor(
    // public productsService: ProductsService,
    private store: Store<IAppState>
  ) {
    this.store.select('products').subscribe(data =>{
      this.products = data ? Array.from(Object.keys(data), k => data[k]): [];
    });
  }

  ngOnInit() {
    // this.productsService.getProducts().subscribe(data => {
      this.store.dispatch(new GetProducts());
    // })
  }

  getRandomInt(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
