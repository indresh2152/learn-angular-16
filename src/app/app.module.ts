import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent1Component } from './components/master-component-1/master-component-1.component';
import { MasterComponent2Component } from './components/master-component-2/master-component-2.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent1Component,
    MasterComponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
