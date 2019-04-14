import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './auth/components/register.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canLoad: [] // TODO: Add guard for lazy loaded Dashboard module here...
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
