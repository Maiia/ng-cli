import { Subject } from 'rxjs/Subject';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from './../../services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {
  loading: Boolean;
  subscription: Subscription;

  constructor(private LoadingService: LoadingService) {}

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------
  
  ngOnInit(){
    this.subscription = this.LoadingService.getLoader().subscribe(loadingSubject => { this.loading = loadingSubject.loading; });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}