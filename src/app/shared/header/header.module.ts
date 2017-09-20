import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

import { ROUTER_SETTINGS } from '../../app.routes';

@NgModule({
  imports: [ 
    CommonModule,
    ROUTER_SETTINGS
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})

export class HeaderModule { }