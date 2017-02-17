import {
  Component, ChangeDetectionStrategy, QueryList, ContentChildren, Input, Output,
  EventEmitter, HostListener, AfterContentInit, OnDestroy
} from '@angular/core';
import { SlideDirective } from './slide.directive';

export enum CarouselDirection {
  NEXT, PREV
}

@Component({
  selector: 're-carousel',
  templateUrl: './carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'carousel'
})
export class CarouselComponent implements AfterContentInit, OnDestroy {

  @Input() activeSlide = 0;
  @Input() interval = 0;
  @Input() animate = false;
  @Output() activeSlideChange = new EventEmitter<number>();
  @ContentChildren(SlideDirective) slides: QueryList<SlideDirective>;
  intervalId: any;
  orderDirection = '';
  direction = '';
  nextActiveSlide = -1;

  ngAfterContentInit(): void {
    if (this.interval) {
      this.startInterval();
    }
  }

  selectSlide(index) {
    if (this.activeSlide !== index) {
      const direction = index > this.activeSlide ? CarouselDirection.NEXT : CarouselDirection.PREV;
      this.onActiveSlideChange(index, direction);
    }
  }

  @HostListener('keydown.arrowLeft', ['$event'])
  selectPrevSlide($event) {
    if (this.activeSlide === 0) {
      this.onActiveSlideChange(this.slides.length - 1, CarouselDirection.PREV);
      return;
    }

    this.onActiveSlideChange(this.activeSlide - 1, CarouselDirection.PREV);
  }

  @HostListener('keydown.arrowRight', [])
  selectNextSlide() {
    if (this.activeSlide === this.slides.length - 1) {
      this.onActiveSlideChange(0, CarouselDirection.NEXT);
      return;
    }
    this.onActiveSlideChange(this.activeSlide + 1, CarouselDirection.NEXT);
  }

  onActiveSlideChange(index, direction: CarouselDirection) {
    if (this.activeSlide === index) {
      return;
    }

    this.direction = direction === CarouselDirection.NEXT ? 'left' : 'right';
    this.orderDirection = direction === CarouselDirection.NEXT ? 'next' : 'prev';
    this.nextActiveSlide = index;


    setTimeout(() => {
      this.nextActiveSlide = -1;
      this.direction = '';
      this.orderDirection = '';
      this.activeSlide = index;
      this.activeSlideChange.emit(this.activeSlide);
    }, 700);
  }

  @HostListener('mouseenter', [])
  pauseInterval() {
    this.stopInterval();
  }

  @HostListener('mouseleave', [])
  startInterval() {
    this.stopInterval();
    if (this.intervalId) {
      this.intervalId = setInterval(() => this.selectNextSlide(), this.interval);
    }
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
