import { NgModule } from '@angular/core';

import { AutoFocusDirective } from './auto-focus.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [
    AutoFocusDirective
  ],
  declarations: [
    AutoFocusDirective]
  ,
  providers: [],
})
export class RebirthCommonModule {
}
