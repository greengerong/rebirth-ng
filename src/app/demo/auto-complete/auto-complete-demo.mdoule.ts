import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AutoCompleteDemoComponent } from './auto-complete-demo.component';
import { RebirthNGModule } from '../../exports';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [CommonModule, RebirthNGModule, FormsModule, HttpModule],
  exports: [AutoCompleteDemoComponent],
  declarations: [AutoCompleteDemoComponent],
  providers: [],
  entryComponents: [AutoCompleteDemoComponent]
})
export class AutoCompleteDemoModule {
}
