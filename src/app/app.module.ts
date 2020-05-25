import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { StaticPageComponent } from './static-page/static-page.component';

@NgModule({
  imports:      [ 
   BrowserModule,
   BrowserAnimationsModule,
   FormsModule,
   HttpClientModule,
   AppRoutingModule,
   MatToolbarModule,
   MatIconModule,
   MatButtonModule,
   MatSidenavModule,
   MatListModule,
  ],
  declarations: [ AppComponent, HomeComponent, TestComponent, StaticPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
