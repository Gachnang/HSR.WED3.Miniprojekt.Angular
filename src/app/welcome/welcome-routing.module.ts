import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from '../auth/components/register.component';
import {LoginComponent} from '../auth/components/login.component';

import {WelcomeComponent} from './welcome.component';

const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [
      {path: 'register', component: RegisterComponent},
      {path: '', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes) // !forChild() important
  ],
  exports: [
    RouterModule
  ]
})
export class WelcomeRoutingModule {
}
