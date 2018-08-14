import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePickerDemoComponent } from './date-picker-demo.component';
import { FormsModule } from '@angular/forms';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  imports: [CommonModule, FormsModule, RebirthNGModule],
  exports: [DatePickerDemoComponent],
  declarations: [DatePickerDemoComponent],
  providers: [],
  entryComponents: [DatePickerDemoComponent]
})
export class DatePickerDemoModule {
}
