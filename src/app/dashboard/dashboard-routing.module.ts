import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TransactionListComponent} from '../transaction-list/transaction-list/transaction-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: null, // TODO: Add initial router outlet dashboard component...
    children: [
      // TODO: Add routing path for dashboard here...
      {
        path: 'transactions',
        component: TransactionListComponent
      }
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
export class DashboardRoutingModule {
}
