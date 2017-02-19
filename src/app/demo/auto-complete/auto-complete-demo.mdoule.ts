import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AutoCompleteDemoComponent } from './auto-complete-demo.component';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';

@NgModule({
  imports: [CommonModule, RebirthUIModule, FormsModule],
  exports: [AutoCompleteDemoComponent],
  declarations: [AutoCompleteDemoComponent],
  providers: [],
  entryComponents: [AutoCompleteDemoComponent]
})
export class AutoCompleteDemoModule {
}
