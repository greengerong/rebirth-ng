import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarDemoComponent } from './progress-bar-demo.component';
import { FormsModule } from '@angular/forms';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';

@NgModule({
  imports: [CommonModule, FormsModule, RebirthUIModule],
  exports: [ProgressBarDemoComponent],
  declarations: [ProgressBarDemoComponent],
  providers: [],
  entryComponents: [ProgressBarDemoComponent]
})
export class ProgressBarDemoModule {
}
