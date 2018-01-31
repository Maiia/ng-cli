import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/publishReplay';

@Injectable()
export class ProductsService {
  public dataUrl: string = "http://localhost:3500/api";
  public dataUrlError: string = "http://localhost:3500/error";

  constructor( public http: HttpClient ){
    this.http = http;
  }

  getProducts(){
    return this.http.get(this.dataUrl, {}).publishReplay(1).refCount();
  }
}