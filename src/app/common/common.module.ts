import {NgModule} from '@angular/core';
import {TitledCardComponent} from './titled-card/titled-card.component';

const EXPORTED_DECLARATIONS = [
  TitledCardComponent
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [],
  exports: EXPORTS,
  providers: []
})
export class CommonModule {
}
