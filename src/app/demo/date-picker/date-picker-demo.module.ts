import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePickerDemoComponent } from './date-picker-demo.component';
import { FormsModule } from '@angular/forms';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';

@NgModule({
  imports: [CommonModule, FormsModule, RebirthUIModule],
  exports: [DatePickerDemoComponent],
  declarations: [DatePickerDemoComponent],
  providers: [],
})
export class DatePickerDemoModule {
}
