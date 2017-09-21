import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
  isLoggedIn: Boolean = false;

  constructor(private http: HttpClient) {
    this.isLoggedIn = false;
  }

  checkLogin(){
    return this.isLoggedIn;
  }

  login(email, password): Observable<boolean>{
    // if(email === 'admin@levi9.com' && password === "admin1"){
      this.isLoggedIn = true;
      return Observable.of(true);
    // } else {
    //   this.isLoggedIn = false;
    // }

    // return Observable.of(false);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}