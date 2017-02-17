import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-carousel-demo',
  templateUrl: './carousel-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselDemoComponent implements OnInit {
  activeSlide = 0;

  constructor() {
  }

  ngOnInit() {
  }

}
