import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchDemoComponent } from './switch-demo.component';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';

@NgModule({
  imports: [CommonModule, RebirthUIModule],
  exports: [SwitchDemoComponent],
  declarations: [SwitchDemoComponent],
  providers: [],
  entryComponents: [SwitchDemoComponent]
})
export class SwitchDemoModule {
}
