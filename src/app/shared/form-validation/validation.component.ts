import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from './../../services/validation.service';

// Annotation section
@Component({
  selector: 'validation-messages',
  styleUrls: ['validation.component.scss'],
  templateUrl: "validation.component.html"
})

// Component controller
export class ValidationMessagesComponent {
  @Input() control: FormControl;

  constructor() {}

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}