import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerDirective } from './date-picker.directive';
import { DatePickerPopupComponent } from './date-picker-popup.component';
import { FormsModule } from '@angular/forms';

import './date-parse.shim';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [DatePickerDirective, DatePickerPopupComponent],
  declarations: [DatePickerDirective, DatePickerPopupComponent],
  providers: [],
  entryComponents: [DatePickerPopupComponent]
})
export class DatePickerModule {
}
