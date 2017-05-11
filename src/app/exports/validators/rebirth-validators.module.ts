import { NgModule } from '@angular/core';

import {
  RangeLengthDirective,
  MinDirective,
  RangeDirective,
  MaxDirective,
  DigitsDirective
} from './rebirth-validators.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [RangeLengthDirective, MinDirective, RangeDirective, MaxDirective, DigitsDirective],
  declarations: [RangeLengthDirective, MinDirective, RangeDirective, MaxDirective, DigitsDirective],
  providers: [],
})
export class RebirthValidatorsModule {
}
