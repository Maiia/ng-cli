import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IAppState, getCounterState, Incremet, Decrement, Reset } from '../store';
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
    private store: Store<IAppState>    
  ) {
    this.titleService.setTitle('Home')
  }

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------
  
  ngOnInit() {
    this.counter$ = this.store.select(getCounterState);
  }

  open(content) {
    this.modalService.open(content);
  }

  increment(){
		this.store.dispatch(new Incremet(1));
	}

	decrement(){
		this.store.dispatch(new Decrement(1));
	}

	reset(){
		this.store.dispatch(new Reset(3));
	}
}
