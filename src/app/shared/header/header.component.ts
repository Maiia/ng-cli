import { Component, Input, OnInit } from '@angular/core';
import { Store  } from '@ngrx/store';
import { IAppState } from '../../store/initial-state';
import { isUndefined } from 'lodash/isUndefined'
import { iError } from '../../store/models/error.model'

// Annotation section
@Component({
  selector: 'header',
  styleUrls: [ 'header.component.scss' ],
  templateUrl: "header.component.html"
})

// Component controller
export class HeaderComponent implements OnInit {
  isActive: Boolean = false;
  error: Boolean;
  
  constructor(
    private store: Store<IAppState>
  ) {
    this.store.select('error').subscribe(data => {
      if(data){
        this.error = data['error'] ? true : false
      }
    });
  }

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------
  
  ngOnInit(){
      
  }
}