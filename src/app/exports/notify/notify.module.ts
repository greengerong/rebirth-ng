import { NgModule } from '@angular/core';

import { NotifyComponent } from './notify.component';
import { CommonModule } from '@angular/common';
import { AlertBoxModule } from '../alert-box';

@NgModule({
  imports: [
    CommonModule,
    AlertBoxModule
  ],
  providers: [],
  declarations: [
    NotifyComponent
  ],
  exports: [
    NotifyComponent
  ],
  entryComponents: [NotifyComponent]
})
export class NotifyModule {
}
