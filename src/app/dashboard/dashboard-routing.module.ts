import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TransactionListComponent} from '../transaction-list/transaction-list/transaction-list.component';
import {DashboardComponent} from './components/dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent
      },
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
