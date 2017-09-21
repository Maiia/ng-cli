import { Component, AfterViewInit, HostListener, Inject, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VERSION } from '@angular/core';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  infoLogStyle: string = 'color: orange; font-size: 12px;';
  isLoggedIn: Boolean;

  constructor(
    public AuthService: AuthService,
    private titleService: Title
  ){
    console.log('%cAngular version: ' + VERSION.full, this.infoLogStyle);
    this.isLoggedIn = this.AuthService.isLoggedIn;
    this.titleService.setTitle('App Component!')
  }

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------

  ngOnInit() {
    // console.log ("Called after the constructor, initializing input properties, and the first call to ngOnChanges");
  }

  ngOnChanges() {
    // console.log ("Called after every change to input properties and before processing content or child views");
  }

  ngDoCheck() {
    //console.log ("Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.");
  }

  ngAfterContentInit() {
    //console.log ("Called after ngOnInit when the component's or directive's content has been initialized");
  }

  ngAfterContentChecked() {
    //console.log ("Called after ngAfterContentInit and very subsequent ngDoCheck()");
  }

  ngAfterViewInit() {
    //console.log ("Called after ngAfterContentInit when the component's view has been initialized. Applies to components only");
  }

  ngAfterViewChecked() {
    //console.log ("Called after every check of the component's view. Applies to components only.");
  }

  ngOnDestroy() {
    //console.log ("Called once, before the instance is destroyed");
  }
}