import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessagesComponent } from './validation.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ValidationMessagesComponent],
  exports: [ValidationMessagesComponent]
})

export class ValidationModule { }