import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'no-content',
  styleUrls: [ './no-content.component.scss' ],
  templateUrl: './no-content.component.html'
})
export class NoContentComponent implements OnInit {
  constructor() {}

  public ngOnInit() {
    console.log('404 - Page Missing');
  }
}
