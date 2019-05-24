import {Injectable, EventEmitter} from '@angular/core';

import {isBlank} from '@app/core';

import {Account} from '../models/account';
import {RegistrationInfo} from '../models/registration-info';
import {LoginInfo} from '../models/login-info';
import {Credential} from '../models/credential';
import {AuthResourceService} from '../resources/auth-resource.service';

import {SecurityTokenStore} from './credential-management/security-token-store';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";


@Injectable({providedIn: 'root'})
export class AuthGuardService {
  constructor(private auth: AuthService, public router: Router) {
  }

  canActivate(): boolean {
    if (!this.auth.hasCredentials) {
      this.router.navigate(['welcome']);
      return false;
    }
    return true;
  }

  canLoad(): boolean {
    return this.canActivate();
  }
}
