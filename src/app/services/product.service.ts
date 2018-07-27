import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';

@Injectable()
export class ProductsService {
  public dataUrl = 'http://localhost:3500/api';
  public dataUrlError = 'http://localhost:3500/error';

  constructor( private http: HttpClient ) {}

  getProducts() {
    return this.http.get(this.dataUrl, {})
      .pipe(
        publishReplay(1),
        refCount()
      );
  }
}
