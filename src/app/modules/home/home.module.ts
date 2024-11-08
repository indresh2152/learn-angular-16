import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { Hotfix1Component } from 'src/app/components/standalone/hotfix-1/hotfix-1.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    Hotfix1Component
  ]
})
export class HomeModule { }
