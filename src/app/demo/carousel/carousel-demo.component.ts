import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-carousel-demo',
  templateUrl: './carousel-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselDemoComponent {
  activeSlide = 0;
}
