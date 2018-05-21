import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingIndicatorComponent } from './loading-indicator.component';
import { LoadingService } from './../../services';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { from } from 'rxjs';
import { createComponent } from '@angular/compiler/src/core';

class LoadingServiceStub {
  getLoader() {
    return from([{
      'loading': true
    }]);
  }
};

describe('LoadingIndicatorComponent: ', () => {
  let component: LoadingIndicatorComponent;
  let fixture: ComponentFixture<LoadingIndicatorComponent>;
  let service: LoadingService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingIndicatorComponent ],
      imports: [HttpClientTestingModule],
      providers: [LoadingService]
    }).compileComponents();

      service = TestBed.get(LoadingService);
      httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIndicatorComponent);
    component = fixture.componentInstance;
    service = TestBed.get(LoadingService);
    fixture.detectChanges();
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
    expect(component.loading).toBeFalsy();
  });
});