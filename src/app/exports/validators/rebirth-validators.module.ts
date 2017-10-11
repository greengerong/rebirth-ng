import { NgModule } from '@angular/core';

import {
  RequiredWithTrimDirective,
  Base64Directive,
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
  UUIDDirective,
  BeforeDateDirective,
  AfterDateDirective
} from './rebirth-validators.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [
    RequiredWithTrimDirective,
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
    BeforeDateDirective,
    AfterDateDirective
  ],
  declarations: [
    RequiredWithTrimDirective,
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
    BeforeDateDirective,
    AfterDateDirective
  ],
  providers: [],
})
export class RebirthValidatorsModule {
}
