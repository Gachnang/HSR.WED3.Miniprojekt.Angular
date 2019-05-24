import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './auth/components/register.component';
import {AuthGuardService} from './auth/services/authGuard.service';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService]
  },

  // Welcome module is eagerly loaded.
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },

  {
    path: 'signup',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
