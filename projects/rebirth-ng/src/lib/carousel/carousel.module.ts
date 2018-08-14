import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel.component';
import { SlideDirective } from './slide.directive';

@NgModule({
  imports: [CommonModule],
  exports: [CarouselComponent, SlideDirective],
  declarations: [CarouselComponent, SlideDirective],
  providers: [],
})
export class CarouselModule {
}
