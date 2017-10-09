import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../services';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public resetForm: FormGroup;
  @Output() reset = new EventEmitter();

  constructor( ) { }

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------

  ngOnInit() {
    this.resetForm = new FormGroup({
      email: new FormControl('', [<any>Validators.required, ValidationService.emailValidator])
    });
  }

  onReset(e, form){
    setTimeout(() => {
      console.log(form)
      this.reset.emit(form);
    }, 1000);
  }
}
