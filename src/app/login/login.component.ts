import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidationService, AuthService } from '../services';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ResetPasswordComponent } from '../reset-password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public resetForm: FormGroup;
  public validateStatus = true;
  closeResult: string;
  modalRef: any;
  @ViewChild('myProfile') myProfile: ResetPasswordComponent

  constructor(
    private modalService: NgbModal,
    public AuthService: AuthService,
    private router: Router,
    private store: Store<fromStore.IAppState>    
  ) { }

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [<any>Validators.required/*, ValidationService.emailValidator*/]),
      password: new FormControl('', [<any>Validators.required/*, ValidationService.passwordValidator*/])
    });
    this.resetForm = new FormGroup({
      email: new FormControl('', [<any>Validators.required, ValidationService.emailValidator])
    });
  }

  // -----------------------------------------
  // Events handlers
  // -----------------------------------------

  onSubmit(form): void {
    this.AuthService.login(form.email, form.password).subscribe((result) => {
      if (result) {
        this.store.dispatch(new fromStore.Login({ 'email': form.email, 'password': form.password }));
        this.validateStatus = true;
        this.router.navigate(['/']);
      } else {
        this.validateStatus = false;
      }
    });
  }

  resetHandler(e){
    this.modalRef.close();
  }

  open(e, content) {
    e.preventDefault();
    this.modalRef = this.modalService.open(content);
  }
}
