import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
