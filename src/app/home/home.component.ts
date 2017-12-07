import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../store';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult: string;
  counter$: Observable<any>;

  constructor(
    private titleService: Title,
    private modalService: NgbModal,
    private store: Store<fromStore.IAppState>    
  ) {
    this.titleService.setTitle('Home')
  }

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------
  
  ngOnInit() {
    this.counter$ = this.store.select(fromStore.getCounterState);
  }

  open(content) {
    this.modalService.open(content);
  }

  increment(){
		this.store.dispatch(new fromStore.Incremet(1));
	}

	decrement(){
		this.store.dispatch(new fromStore.Decrement(1));
	}

	reset(){
		this.store.dispatch(new fromStore.Reset(3));
	}
}
