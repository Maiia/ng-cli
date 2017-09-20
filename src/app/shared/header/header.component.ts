import { Component, Input, OnInit } from '@angular/core';

// Annotation section
@Component({
  selector: 'header',
  styleUrls: [ 'header.component.scss' ],
  templateUrl: "header.component.html"
})

// Component controller
export class HeaderComponent implements OnInit {

  constructor() {
    console.log('%cHeader component', 'background: green; color: white; display: block; padding: 2px 10px; font-size: 15px;'); 
  }

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------
  
  ngOnInit(){
      
  }
}