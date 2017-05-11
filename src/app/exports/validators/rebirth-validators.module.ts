import { NgModule } from '@angular/core';

import { RangeLengthDirective, MinDirective, MaxDirective } from './rebirth-validators.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [RangeLengthDirective, MinDirective, MaxDirective],
  declarations: [RangeLengthDirective, MinDirective, MaxDirective],
  providers: [],
})
export class RebirthValidatorsModule {
}
