import { Injectable } from '@angular/core';
import { Observable ,  Subject } from 'rxjs';

@Injectable()
export class LoadingService {
  public loading = new Subject<{ loading: boolean, hasError: boolean, hasMsg: string} >();

  showLoading() {
    this.loading.next({loading: true, hasError: false, hasMsg: ''});
  }

  hideLoading() {
    this.loading.next({loading: false, hasError: false, hasMsg: ''});
  }

  getLoader(): Observable<any> {
    return this.loading.asObservable();
  }
}
