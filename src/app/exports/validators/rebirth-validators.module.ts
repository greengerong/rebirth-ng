import { NgModule } from '@angular/core';

import {
  Base64Directive,
  BeforeDateDirective,
  DateDirective,
  DateISODirective,
  DigitsDirective,
  EmailDirective,
  EqualDirective,
  EqualToDirective,
  IncludesDirective,
  JsonDirective,
  MaxDirective,
  MinDirective,
  NumberDirective,
  PhoneDirective,
  RangeDirective,
  RangeLengthDirective,
  UrlDirective,
  UUIDDirective
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
    EqualToDirective,
    BeforeDateDirective
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
    EqualToDirective,
    BeforeDateDirective
  ],
  providers: [],
})
export class RebirthValidatorsModule {
}
