import { Component, OnInit } from '@angular/core';
import { FormGroup , FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  get sections() {
    return this.form.controls.sections['controls'];
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      sections: new FormArray([
        this.initSection()
      ]),
    })
  }

  initSection(){
    return new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
    })
  }  

  addSection(){
    const control = <FormArray>this.form.get('sections');
    control.push(this.initSection());
  }

  onSubmit(form){
    console.log(form.value)
  }

}
