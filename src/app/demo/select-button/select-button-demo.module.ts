import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectButtonDemoComponent } from './select-button-demo.component';
import { FormsModule } from '@angular/forms';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';

@NgModule({
  imports: [CommonModule, FormsModule, RebirthUIModule],
  exports: [SelectButtonDemoComponent],
  declarations: [SelectButtonDemoComponent],
  providers: [SelectButtonDemoComponent],
  entryComponents: [SelectButtonDemoComponent]
})
export class SelectButtonDemoModule {
}
