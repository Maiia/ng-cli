/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ngxChartComponent } from './ngx-chart.component';

describe('ngxChartComponent', () => {
  let component: ngxChartComponent;
  let fixture: ComponentFixture<ngxChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ngxChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ngxChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
