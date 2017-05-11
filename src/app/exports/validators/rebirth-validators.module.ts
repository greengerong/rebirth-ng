import { NgModule } from '@angular/core';

import { RangeLengthDirective } from './rebirth-validators.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [RangeLengthDirective],
  declarations: [RangeLengthDirective],
  providers: [],
})
export class RebirthValidatorsModule {
}
