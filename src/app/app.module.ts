import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MnFullpageModule, MnFullpageService } from 'ngx-fullpage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot() // Don't forget to call .forRoot() static method
  ],
  providers: [MnFullpageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
