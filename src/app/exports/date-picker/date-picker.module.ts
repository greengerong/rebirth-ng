import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePickerDirective } from './date-picker.directive';
import { DatePickerPopupComponent } from './date-picker-popup.component';
import { FormsModule } from '@angular/forms';
import { DatePickerCalendarComponent } from './date-picker-calendar.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [DatePickerDirective, DatePickerCalendarComponent, DatePickerPopupComponent],
  declarations: [DatePickerDirective, DatePickerCalendarComponent, DatePickerPopupComponent],
  providers: [],
  entryComponents: [DatePickerCalendarComponent, DatePickerPopupComponent]
})
export class DatePickerModule {
}
