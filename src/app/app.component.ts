import { Component, AfterViewInit, HostListener, Inject, Input, OnInit } from '@angular/core';
import { MnFullpageService, MnFullpageOptions } from 'ngx-fullpage';
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
  
  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    scrollingSpeed: 1000,
    paddingTop: '50px',
    
    css3: true,
    onLeave: function(index, nextIndex, direction){
      if(index === 1){
        $(".fixed-top").addClass("bg-dark text-white")
      }
    },
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
      console.log(anchorLink, index)
      
      if(index === 1){
        $(".fixed-top").removeClass("bg-dark text-white")
      } else {
        $(".fixed-top").addClass("bg-dark text-white")
      }
      //using index
      if(index == 3){
        $('.counter').counterUp({
          delay: 10,
          time: 1000
        });  
      }
    }
});

  constructor(
    public pageService: MnFullpageService, 
    private modalService: NgbModal,
    private store: Store<IAppState>
  ){ }

  public ngOnInit() {
    this.counter = this.store.select('counter');
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

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }
}