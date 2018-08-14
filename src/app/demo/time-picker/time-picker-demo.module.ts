import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RebirthNGModule } from 'rebirth-ng';
import { FormsModule } from '@angular/forms';
import { TimePickerDemoComponent } from './time-picker-demo.component';

@NgModule({
  imports: [CommonModule, FormsModule, RebirthNGModule],
  exports: [TimePickerDemoComponent],
  declarations: [TimePickerDemoComponent],
  providers: [],
  entryComponents: [TimePickerDemoComponent]
})
export class TimePickerDemoModule {
}

