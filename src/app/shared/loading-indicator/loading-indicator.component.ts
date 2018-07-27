import { Subject ,  Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from './../../services';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {
  loading: Boolean = false;
  subscription: Subscription = null;

  constructor(private LoadingService: LoadingService) {}

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------

  ngOnInit() {
    this.subscription = this.LoadingService.getLoader().subscribe(loadingSubject => { this.loading = loadingSubject.loading; });
  }

  OnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
