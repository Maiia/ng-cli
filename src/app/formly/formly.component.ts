import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.scss']
})
export class FormlyComponent implements OnInit {
  title = "Formly investigations";
  form = new FormGroup({});
  model = { };

  fields: FormlyFieldConfig[] = [{
    key: 'firstName',
    type: 'input',
    templateOptions: {
      required: true,
      label: 'First Name',
      placeholder:'First Name'
    }
  }, {
    key: 'lastName',
    type: 'input',
    templateOptions: {
      required: true,
      label: 'Last Name',
       placeholder:'Last Name'

    }
  }, {
    key: 'email',
    type: 'input',
    templateOptions: {
      type: 'email',
      label: 'Email address',
      placeholder: 'Enter email',
      required: true,
    }
  }];

  constructor() { }

  ngOnInit() {
  }

  submit(model) {
    console.log(model);
  }
}
