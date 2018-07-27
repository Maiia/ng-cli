import { Component, OnInit } from '@angular/core';

// Annotation section
@Component({
  selector: 'app-no-content',
  styleUrls: [ './no-content.component.scss' ],
  templateUrl: './no-content.component.html'
})

// Component controller
export class NoContentComponent implements OnInit {
  constructor() {}

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------
  public ngOnInit() {
    console.log('404 - Page Missing');
  }
}
