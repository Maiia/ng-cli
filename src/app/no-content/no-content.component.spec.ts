import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NoContentComponent } from './no-content.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NoContentComponent: ', () => {
  let component: NoContentComponent;
  let fixture: ComponentFixture<NoContentComponent>;
  let headerElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoContentComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });

  it(`should be readly initialized and log some information`, () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled()

    component.ngOnInit()

    expect(console.log).toHaveBeenCalled();
  });

  it(`should have title '404 Not Found'`, () => {
    headerElement = <HTMLElement> fixture.nativeElement.querySelector("h1");
    expect(headerElement.innerText).toContain('404 Not Found')
  })
});