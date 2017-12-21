import { NgModule } from '@angular/core';

import { SelectComponent } from './select.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from '../auto-complete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AutoCompleteModule
  ],
  providers: [],
  declarations: [
    SelectComponent
  ],
  exports: [
    SelectComponent
  ],
})
export class SelectModule {
}
