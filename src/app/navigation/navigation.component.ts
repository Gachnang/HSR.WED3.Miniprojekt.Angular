import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/services/auth.service';

@Component({
  selector: 'wed-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public autSvc: AuthService) {
  }

  ngOnInit() {
  }

}
