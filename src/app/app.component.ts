import { Component, AfterViewInit, HostListener, Inject, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

// redux
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Counter from './store/actions';
import { IAppState } from './store/initial-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  closeResult: string;
  counter: Observable<any>;

  constructor(
    private modalService: NgbModal,
    private store: Store<IAppState>
  ){ }

  public ngOnInit() {
    this.counter = this.store.select('counter');
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  increment(){
		this.store.dispatch(new Counter.Incremet(1));
	}

	decrement(){
		this.store.dispatch(new Counter.Decrement(1));
	}

	reset(){
		this.store.dispatch(new Counter.Reset(3));
	}
}