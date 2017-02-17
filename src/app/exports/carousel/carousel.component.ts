import {
  Component, ChangeDetectionStrategy, QueryList, ContentChildren, Input, Output,
  EventEmitter, HostListener, AfterContentInit, OnDestroy
} from '@angular/core';
import { SlideDirective } from './slide.directive';

@Component({
  selector: 're-carousel',
  templateUrl: './carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'carousel'
})
export class CarouselComponent implements AfterContentInit, OnDestroy {

  @Input() activeSlide = 0;
  @Input() interval = 0;
  @Output() activeSlideChange = new EventEmitter<number>();
  @ContentChildren(SlideDirective) slides: QueryList<SlideDirective>;
  intervalId: any;

  ngAfterContentInit(): void {
    if (this.interval) {
      this.startInterval();
    }
  }

  selectSlide(index) {
    if (this.activeSlide !== index) {
      this.onActiveSlideChange(index);
    }
  }

  @HostListener('keydown.arrowLeft', ['$event'])
  selectPrevSlide($event) {
    if (this.activeSlide === 0) {
      this.onActiveSlideChange(this.slides.length - 1);
      return;
    }

    this.onActiveSlideChange(this.activeSlide - 1);
  }

  @HostListener('keydown.arrowRight', [])
  selectNextSlide() {
    if (this.activeSlide === this.slides.length - 1) {
      this.onActiveSlideChange(0);
      return;
    }
    this.onActiveSlideChange(this.activeSlide + 1);
  }

  onActiveSlideChange(index) {
    this.activeSlide = index;
    this.activeSlideChange.emit(this.activeSlide);
  }

  @HostListener('mouseenter', [])
  pauseInterval() {
    this.stopInterval();
  }

  @HostListener('mouseleave', [])
  startInterval() {
    this.stopInterval();
    this.intervalId = setInterval(() => this.selectNextSlide(), this.interval);
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }

  private stopInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
