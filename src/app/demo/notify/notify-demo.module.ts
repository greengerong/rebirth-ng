import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyDemoComponent } from './notify-demo.component';
import { RebirthNGModule } from '../../exports';


@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule
  ],
  exports: [
    NotifyDemoComponent
  ],
  declarations: [NotifyDemoComponent],
  providers: [],
  entryComponents: [NotifyDemoComponent]
})
export class NotifyDemoModule {
}
