import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidationService, AuthService } from '../services';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/initial-state';
import * as Login from '../store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public validateStatus = true;

  constructor(
    public AuthService: AuthService,
    private router: Router,
    private store: Store<IAppState>    
  ) { }

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [<any>Validators.required/*, ValidationService.emailValidator*/]),
      password: new FormControl('', [<any>Validators.required/*, ValidationService.passwordValidator*/])
    });
  }

  // -----------------------------------------
  // Events methods
  // -----------------------------------------

  onSubmit(form): void {
    this.AuthService.login(form.email, form.password).subscribe((result) => {
      if (result) {
        this.store.dispatch(new Login.Login({ 'email': form.email, 'password': form.password }));
        this.validateStatus = true;
        this.router.navigate(['/']);
      } else {
        this.validateStatus = false;
      }
    });
  }
}
