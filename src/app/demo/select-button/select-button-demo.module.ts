import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectButtonDemoComponent } from './select-button-demo.component';
import { FormsModule } from '@angular/forms';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  imports: [CommonModule, FormsModule, RebirthNGModule],
  exports: [SelectButtonDemoComponent],
  declarations: [SelectButtonDemoComponent],
  providers: [SelectButtonDemoComponent],
  entryComponents: [SelectButtonDemoComponent]
})
export class SelectButtonDemoModule {
}
