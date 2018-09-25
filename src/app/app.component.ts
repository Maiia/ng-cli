import { Component, AfterViewInit, HostListener, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { VERSION } from '@angular/core';
import { AuthService } from './services';
import { difference } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  infoLogStyle = 'color: orange; font-size: 12px;';
  isLoggedIn: Boolean = false;
  content = null;

  constructor(
    public AuthService: AuthService,
    private titleService: Title,
    domSanitizer: DomSanitizer
  ) {
    console.log('%cAngular version: ' + VERSION.full, this.infoLogStyle);
    this.titleService.setTitle('App Component!');
    // console.log(difference([2, 1], [2, 3]));

    // setTimeout(() => { 
    //   this.content = domSanitizer.bypassSecurityTrustHtml("<app-elements name='custom'></app-elements>");
    // }, 1000)
  }

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------

  ngOnInit() {
    // console.log ('Called after the constructor, initializing input properties, and the first call to ngOnChanges');
  }

  OnChanges() {
    // console.log ('Called after every change to input properties and before processing content or child views');
  }

  DoCheck() {
    //console.log ('Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.');
  }

  AfterContentInit() {
    //console.log ('Called after ngOnInit when the component\'s or directive's content has been initialized');
  }

  AfterContentChecked() {
    this.isLoggedIn = this.AuthService.checkLogin();
    //console.log ('Called after ngAfterContentInit and very subsequent ngDoCheck()');
  }

  AfterViewInit() {
    //console.log ('Called after ngAfterContentInit when the component\'s view has been initialized. Applies to components only');
  }

  AfterViewChecked() {
    //console.log ('Called after every check of the component\'s view. Applies to components only.');
  }

  OnDestroy() {
    // console.log ('Called once, before the instance is destroyed');
  }
}
