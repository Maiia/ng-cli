import { Component, Input, OnInit } from '@angular/core';
import { Store  } from '@ngrx/store';
import * as fromStore from '../../store';
import { isUndefined } from 'lodash/isUndefined'

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
    private store: Store<fromStore.IAppState>
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