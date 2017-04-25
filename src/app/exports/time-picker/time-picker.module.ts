import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimePickerComponent } from './time-picker.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [TimePickerComponent],
  declarations: [TimePickerComponent],
  providers: [],
})
export class TimePickerModule {
}
