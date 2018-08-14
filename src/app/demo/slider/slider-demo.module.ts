import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderDemoComponent } from './slider-demo.component';
import { RebirthNGModule } from 'rebirth-ng';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule,
    FormsModule
  ],
  exports: [
    SliderDemoComponent
  ],
  declarations: [SliderDemoComponent],
  providers: [],
  entryComponents: [SliderDemoComponent]
})
export class SliderDemoModule {
}
