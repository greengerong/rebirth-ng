import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarDemoComponent } from './progress-bar-demo.component';
import { FormsModule } from '@angular/forms';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  imports: [CommonModule, FormsModule, RebirthNGModule],
  exports: [ProgressBarDemoComponent],
  declarations: [ProgressBarDemoComponent],
  providers: [],
  entryComponents: [ProgressBarDemoComponent]
})
export class ProgressBarDemoModule {
}
