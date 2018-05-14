import { TestBed, ComponentFixture,  } from '@angular/core/testing';
import { UnderlineDirective } from './underline.directive'
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser'

// dummy testing component
@Component({
    template: `<h3 underline>directive test</h3> ` 
})
class TestUnderlineComponent {}

describe('Directive: Underline: ', () => {
    let component: TestUnderlineComponent;
    let fixture: ComponentFixture<TestUnderlineComponent>;
    let dElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [TestUnderlineComponent, UnderlineDirective]
        });

        fixture = TestBed.createComponent(TestUnderlineComponent); 
        component = fixture.componentInstance;
        dElement = fixture.debugElement.query(By.css('h3'));
    });

    it('Underline text on h3', () => {
        dElement.triggerEventHandler('mouseenter', null); 
        fixture.detectChanges();
        expect(dElement.nativeElement.style.textDecoration).toBe('underline'); 
      
        dElement.triggerEventHandler('mouseleave', null);
        fixture.detectChanges();
        expect(dElement.nativeElement.style.textDecoration).toBe('none');
    });
})