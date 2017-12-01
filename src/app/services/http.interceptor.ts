import { Injectable, Inject, forwardRef } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { LoadingService } from './loading.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private LoadingService: LoadingService
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

    return next
      .handle(customReq)
      .do((event: HttpEvent<any>) => {
        this.onSuccess(event);
      }, (error: any) => {
        this.onError(error);
      });
  }

  // buildFullUrl(request){
  //   return this.config.apiEndpoint + request.url;
  // }

  // -----------------------------------------
  // Callbacks
  // -----------------------------------------

  onSuccess(event){
    if (event instanceof HttpResponse) {
      // Intercepting HTTP responses
      this.LoadingService.hideLoading();
    }
  }

  onError(error){
    this.LoadingService.hideLoading();
    // console.log(error)
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        // JWT Token Expired
        // redirect to the login route
        // or show a modal
      }
    }
  }
}