import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Annotation section
@Injectable()

// Abstract class
abstract class RequestResolver implements Resolve<any> {
  abstract dataUrl: string;
  constructor( public http: HttpClient ){
    this.http = http;
  }
  abstract resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
}

export class ProjectResolver extends RequestResolver {
  dataUrl: string = "https://api.citysdk.waag.org/layers/parking.garage/objects?per_page=50";

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http.get(this.dataUrl);
  }
}

export const APP_RESOLVER_PROVIDERS = [ ProjectResolver ];
