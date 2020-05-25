import { Component } from '@angular/core';
import { MenuItems, MENU } from './assets/menu-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  
  menu: MenuItems[] = MENU;
}
