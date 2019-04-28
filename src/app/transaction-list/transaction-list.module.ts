import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionTableComponent} from './transaction-table/transaction-table.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {SharedModule} from '@app/shared';

const EXPORTED_DECLARATIONS = [
  TransactionTableComponent,
  TransactionListComponent
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: EXPORTS,
  providers: []
})
export class TransactionListModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: TransactionListModule,
      providers: []
    };
  }
}
