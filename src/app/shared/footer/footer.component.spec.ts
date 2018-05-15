import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer.component';
import { DebugElement } from '@angular/core'
import { By } from '@angular/platform-browser';

describe('FooterComponent: ', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('.text-muted'))
    htmlElement = debugElement.nativeElement
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });

  it(`should display footer test`, () => {
    expect(htmlElement.textContent).toBe("Application Footer");
  });
});