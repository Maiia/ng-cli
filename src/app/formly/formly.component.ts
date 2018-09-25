import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.scss']
})
export class FormlyComponent implements OnInit {
  title = "Formly investigations";
  form = new FormGroup({});
  model = { };
  options: FormlyFormOptions = {
    formState: {}
  };

  fields: FormlyFieldConfig[] = [{
    key: 'firstName',
    type: 'input',
    templateOptions: {
      required: true,
      label: 'First Name',
      placeholder:'First Name',
    },
    validators: {
      validation: ['first_name'],
    },
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
  },{
    key: 'custom_component',
    type: 'custom',
  },];

  constructor() { }

  ngOnInit() {
  }

  onClickHandler(){
    this.fields = [{
      key: 'firstName',
      type: 'input',
      templateOptions: {
        required: true,
        label: 'First Name',
        placeholder:'First Name'
      },
      validators: {
        validation: ['first_name'],
      },
    }, {
      key: 'marvel1',
      type: 'select',
      templateOptions: {
        label: 'Normal Select',
        options: [
          {label: 'Iron Man', value: 'iron_man'},
          {label: 'Captain America', value: 'captain_america'},
          {label: 'Black Widow', value: 'black_widow'},
          {label: 'Hulk', value: 'hulk'},
          {label: 'Captain Marvel', value: 'captain_marvel'},
        ],
      },
    }, {
      key: 'marvel3',
      type: 'select',
      templateOptions: {
        label: 'Select with custom name/value/group',
        options: [
          {label: 'Iron Man', id: 'iron_man', gender: 'Male'},
          {label: 'Captain America', id: 'captain_america', gender: 'Male'},
          {label: 'Black Widow', id: 'black_widow', gender: 'Female'},
          {label: 'Hulk', id: 'hulk', gender: 'Male'},
          {label: 'Captain Marvel', id: 'captain_marvel', gender: 'Female'},
        ],
        groupProp: 'gender',
        valueProp: 'id',
        labelProp: 'label',
      },
    },{
      key: 'Radio',
      type: 'radio',
      templateOptions: {
        label: 'Radio',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' }
        ],
      },
    }]
  }

  submit() {
    if (this.form.valid) {
      console.log(this.model);
    }
  }
}
