import { Injectable, Inject, forwardRef } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators'

import { LoadingService } from './loading.service';

import { Store  } from '@ngrx/store';
import * as fromStore from '../store';

@Injectable()
export class Interceptor implements HttpInterceptor {
  public cache: HttpEvent<any>;

  constructor(
    private LoadingService: LoadingService,
    private store: Store<fromStore.IAppState>
  ) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.LoadingService.showLoading();

    // Before doing anything, it's important to only cache GET requests.
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    // add a custom header
    const JWT = `Bearer Token`;
    const customReq = request.clone({
      // url: this.buildFullUrl(request),    // to set api url use this option
      setHeaders: {
        Authorization: JWT
      }
    });

    // First, check the cache to see if this request exists.
    if(this.cache != null) {
      this.LoadingService.hideLoading();
      return of(this.cache);
    }

    return next
      .handle(customReq)
      .pipe(
        tap((event: HttpEvent<any>) => {
          this.onSuccess(event);
        }, (error: any) => {
          this.onError(error);
        })
      );
  }

  // buildFullUrl(request){
  //   return this.config.apiEndpoint + request.url;
  // }

  // -----------------------------------------
  // Callbacks
  // -----------------------------------------

  onSuccess(event){
    if (event instanceof HttpResponse) {
      // No cached response exists. Go to the network, and cache the response when it arrives.
      // Intercepting HTTP responses
      this.cache = event;
      this.LoadingService.hideLoading();
    }
  }

  onError(error){
    this.LoadingService.hideLoading();
    // this.store.dispatch(new TriggerError(error));
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        // JWT Token Expired
        // redirect to the login route
        // or show a modal
      }
    }
  }
}