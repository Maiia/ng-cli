import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Annotation section
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

// Component controller
export class ProfileComponent implements OnInit {
  results: any;

  constructor(private route: ActivatedRoute) {
    this.results = this.route.snapshot.data['results'].results;
  }

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------

  ngOnInit() {
    console.log(this.results)
  }
}
