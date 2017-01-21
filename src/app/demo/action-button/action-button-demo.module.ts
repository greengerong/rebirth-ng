import { NgModule } from '@angular/core';

import { ActionButtonDemoComponent } from './action-button-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthUIModule } from '../../exports';

@NgModule({
  imports: [
    CommonModule,
    RebirthUIModule
  ],
  exports: [ActionButtonDemoComponent],
  declarations: [ActionButtonDemoComponent],
  providers: [],
})
export class ActionButtonDemoModule {
}
