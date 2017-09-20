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
  profile: any;

  constructor(private route: ActivatedRoute) {
    this.profile = this.route.snapshot.data['profile'];
  }

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------

  ngOnInit() {
    console.log(this.profile.features)
  }
}
