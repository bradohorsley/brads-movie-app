import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports:      [ 
   BrowserModule,
   BrowserAnimationsModule,
   FormsModule,
   HttpClientModule,
   MatToolbarModule,
   MatIconModule,
   MatButtonModule,
   MatSidenavModule,
   MatListModule,
  ],
  declarations: [ AppComponent, PagesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
