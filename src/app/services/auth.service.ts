import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable()
export class AuthService {
  isLoggedIn: Boolean = false;

  constructor(private http: HttpClient) {
    this.isLoggedIn = true;
  }

  checkLogin(): Boolean{
    return this.isLoggedIn;
  }

  login(email, password): Observable<boolean>{
    // if(email === 'admin@levi9.com' && password === "admin1"){
      this.isLoggedIn = true;
      return of(true);
    // } else {
    //   this.isLoggedIn = false;
    // }

    // return Observable.of(false);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}