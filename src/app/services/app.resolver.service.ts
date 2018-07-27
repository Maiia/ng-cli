import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

// -----------------------------------------
// Test Page Resolver
// -----------------------------------------

@Injectable()
export class TestResolver implements Resolve<any>  {
  public dataUrl = 'https://swapi.co/api/people/';

  constructor( public http: HttpClient ) {
    this.http = http;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http.get(this.dataUrl);
  }
}

// -----------------------------------------
// Profile resolver
// -----------------------------------------

@Injectable()
export class ProfileResolver implements Resolve<any>  {
  public dataUrl = 'https://swapi.co/api/people/';
  cachedData: Object;

  constructor( public http: HttpClient ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.cachedData) {
      return of(this.cachedData);
    } else {
      return this.http.get(this.dataUrl);
    }
  }
}

export const APP_RESOLVER_PROVIDERS = [ ProfileResolver, TestResolver ];
