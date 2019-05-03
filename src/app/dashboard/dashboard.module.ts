import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {SharedModule} from '@app/shared';

import {AuthModule} from '../auth/auth.module';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './components/dashboard.component';
import {TransactionTableComponent} from '../transaction-list/transaction-table/transaction-table.component';
import {TransactionListComponent} from '../transaction-list/transaction-list/transaction-list.component';
import {TransactionFilterComponent} from '../transaction-list/transaction-filter/transaction-filter.component';
import {TransactionNewComponent} from './components/transaction-new/transaction-new.component';


const EXPORTED_DECLARATIONS = [
  // Declarations (Components / Directives) which can be used outside the Module
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS,
  DashboardComponent,
  TransactionTableComponent,
  TransactionListComponent,
  TransactionFilterComponent,
  TransactionNewComponent
  // TransactionListModule
  // Declarations (Components / Directives) which can be used inside the Module
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
  // Components/Directives (or even Modules) to export (available for other modules)
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    // Other Modules to import (imports the exported Components/Directives from the other module)
    SharedModule,
    CommonModule,
    FormsModule,
    AuthModule,
    DashboardRoutingModule
  ],
  exports: EXPORTS,
  providers: [
    // DI Providers (hierarchical)
    // (Services, Tokens, Factories, ...) used from/within this Module
    //  * Registers these Classes for the current Module; importing Modules will create new instances (for importing level and below)
  ]
})
export class DashboardModule {
  // Do not add forRoot(), static references to this module from the Root/App Module will prevent lazy loading!
}
