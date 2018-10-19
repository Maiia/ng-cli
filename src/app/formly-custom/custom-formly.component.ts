import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-custom',
  templateUrl: './custom-formly.component.html',
  styleUrls: ['./custom-formly.component.scss']
})

export class CustomFormlyComponent extends FieldType implements OnInit {
  ngOnInit(){
    console.log("init xustom component");
  }
}
