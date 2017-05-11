import { NgModule } from '@angular/core';

import {
  RangeLengthDirective,
  MinDirective,
  RangeDirective,
  MaxDirective,
  DigitsDirective,
  NumberDirective,
  UrlDirective,
  EmailDirective,
  DateDirective,
  DateISODirective,
  JsonDirective
} from './rebirth-validators.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [
    RangeLengthDirective,
    MinDirective,
    RangeDirective,
    MaxDirective,
    DigitsDirective,
    NumberDirective,
    UrlDirective,
    EmailDirective,
    DateDirective,
    DateISODirective,
    JsonDirective
  ],
  declarations: [
    RangeLengthDirective,
    MinDirective,
    RangeDirective,
    MaxDirective,
    DigitsDirective,
    NumberDirective,
    UrlDirective,
    EmailDirective,
    DateDirective,
    DateISODirective,
    JsonDirective
  ],
  providers: [],
})
export class RebirthValidatorsModule {
}
