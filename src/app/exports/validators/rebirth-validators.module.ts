import { NgModule } from '@angular/core';

import { RangeLengthDirective, MinDirective, RangeDirective, MaxDirective } from './rebirth-validators.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [RangeLengthDirective, MinDirective, RangeDirective, MaxDirective],
  declarations: [RangeLengthDirective, MinDirective, RangeDirective, MaxDirective],
  providers: [],
})
export class RebirthValidatorsModule {
}
