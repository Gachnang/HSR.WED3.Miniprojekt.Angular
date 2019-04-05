import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '../common/common.module';

const EXPORTED_DECLARATIONS = [
  // TODO: Add declarations here, if additional components/directives/... should be exported
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
  // Declarations (Components / Directives) which can be used inside the Module
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS,
  CommonModule
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: EXPORTS,
  providers: []
})
export class SharedModule {
  // forRoot() isn't needed here...
}
