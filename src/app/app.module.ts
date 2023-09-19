import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HugoLindoComponent } from './hugo-lindo/hugo-lindo.component';

@NgModule({
  declarations: [
    AppComponent,
    HugoLindoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
