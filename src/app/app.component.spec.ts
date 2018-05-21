import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';
import { AuthService } from './services';

export class MockAuthService {
  checkLogin(): Boolean {
    return true;
  }

  login(): Boolean {
    return true;
  }

  logout(): void {
    return;
  }
}

describe('App: AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers:[
        {
          provide: AuthService,
          useClass: MockAuthService
        },
        Title
      ],
      imports:[HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Application main Component', () => {
    expect(component).toBeTruthy();
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });
});