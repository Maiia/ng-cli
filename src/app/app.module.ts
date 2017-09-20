import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// external application modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// redux
import { rootReducer } from "./store/reducers/index";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),

    // redux
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({ maxAge: 10 })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
