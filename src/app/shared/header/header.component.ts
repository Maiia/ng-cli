import { Component, Input, OnInit } from '@angular/core';

// Annotation section
@Component({
  selector: 'header',
  styleUrls: [ 'header.component.scss' ],
  templateUrl: "header.component.html"
})

// Component controller
export class HeaderComponent implements OnInit {
  isActive: Boolean = false;
  
  constructor() {}

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------
  
  ngOnInit(){
      
  }
}