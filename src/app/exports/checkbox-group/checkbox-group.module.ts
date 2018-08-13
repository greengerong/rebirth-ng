import { NgModule } from '@angular/core';

import { CheckboxGroupComponent } from './checkbox-group.component';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [
    CheckboxGroupComponent,
    CheckboxComponent
  ],
  exports: [
    CheckboxGroupComponent,
    CheckboxComponent
  ],
})
export class CheckboxGroupModule {
}
