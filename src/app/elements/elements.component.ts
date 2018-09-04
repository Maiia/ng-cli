import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss'],
})
export class MyElementsComponent implements OnInit {
  @Input() name = 'default';

  constructor() { }

  ngOnInit() {
  }

}
