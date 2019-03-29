import {Component} from '@angular/core';
import {setTheme} from 'ngx-bootstrap';

@Component({
  selector: 'wed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    setTheme('bs4');
  }
}
