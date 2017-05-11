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
  JsonDirective,
  Base64Directive,
  PhoneDirective,
  UUIDDirective,
  EqualDirective,
  IncludesDirective,
  EqualToDirective
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
    JsonDirective,
    Base64Directive,
    PhoneDirective,
    UUIDDirective,
    EqualDirective,
    IncludesDirective,
    EqualToDirective
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
    JsonDirective,
    Base64Directive,
    PhoneDirective,
    UUIDDirective,
    EqualDirective,
    IncludesDirective,
    EqualToDirective
  ],
  providers: [],
})
export class RebirthValidatorsModule {
}
