import { NgModule } from '@angular/core';

import { ActionButtonDemoComponent } from './action-button-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule
  ],
  exports: [ActionButtonDemoComponent],
  declarations: [ActionButtonDemoComponent],
  providers: [],
  entryComponents: [ActionButtonDemoComponent]
})
export class ActionButtonDemoModule {
}
