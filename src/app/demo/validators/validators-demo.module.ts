import { NgModule } from '@angular/core';

import { ValidatorsDemoComponent } from './validators-demo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  imports: [CommonModule, FormsModule, RebirthNGModule],
  exports: [ValidatorsDemoComponent],
  declarations: [ValidatorsDemoComponent],
  providers: [ValidatorsDemoComponent],
  entryComponents: [ValidatorsDemoComponent]
})
export class ValidatorsDemoModule {
}
