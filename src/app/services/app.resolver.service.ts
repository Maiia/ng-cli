import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// -----------------------------------------
// Test Page Resolver
// -----------------------------------------

@Injectable()
export class testResolver implements Resolve<any>  {
  public dataUrl: string = "https://api.citysdk.waag.org/layers/parking.garage/objects?per_page=50";

  constructor( public http: HttpClient ){
    this.http = http;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.http.get(this.dataUrl);
  }
}

// -----------------------------------------
// Profile resolver
// -----------------------------------------

@Injectable()
export class ProfileResolver implements Resolve<any>  {
  public dataUrl: string = "https://api.citysdk.waag.org/layers/parking.garage/objects?per_page=50";

  constructor( public http: HttpClient ){
    this.http = http;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.http.get(this.dataUrl);
  }
}

export const APP_RESOLVER_PROVIDERS = [ ProfileResolver, testResolver ];
