import { Component, Input } from '@angular/core';

// Annotation section
@Component({
    selector: 'footer',
    styleUrls: [ 'footer.component.scss' ],
    templateUrl: "footer.component.html"
})

// Component controller
export class FooterComponent {

    constructor() {
        console.log('%cFooter component', 'background: green; color: white; display: block; padding: 2px 10px; font-size: 15px;'); 
    }

    // -----------------------------------------
    // Component Lifecycle methods
    // -----------------------------------------
    
    ngOnInit(){
       
    }
}