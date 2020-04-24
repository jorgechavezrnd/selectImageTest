import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectImageComponent } from './components/select-image/select-image.component';
import { SelectImage2Component } from './components/select-image2/select-image2.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectImageComponent,
    SelectImage2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
