import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselDemoComponent } from './carousel-demo.component';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';

@NgModule({
  imports: [CommonModule, RebirthUIModule],
  exports: [CarouselDemoComponent],
  declarations: [CarouselDemoComponent],
  providers: [],
  entryComponents: [CarouselDemoComponent]
})
export class CarouselDemoModule {
}
