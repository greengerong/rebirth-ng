import {
  Component, ChangeDetectionStrategy, QueryList, ContentChildren, Input, Output,
  EventEmitter, HostListener, AfterContentInit, OnDestroy, Renderer2, ViewChildren, ElementRef
} from '@angular/core';
import { SlideDirective } from './slide.directive';
import { animation, animationTimeout } from '../utils/animation-utils';
import { RebirthNGConfig } from '../rebirth-ng.config';

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
  @Input() interval: number;
  @Input() animate: boolean;
  @Output() activeSlideChange = new EventEmitter<number>();
  @ContentChildren(SlideDirective) slides: QueryList<SlideDirective>;
  @ViewChildren('slideItem') slideItems: QueryList<ElementRef>;
  intervalId: any;
  reflowDuration: number;
  animationDuration: number;

  constructor(private  renderer: Renderer2, private rebirthUIConfig: RebirthNGConfig) {
    this.reflowDuration = rebirthUIConfig.carousel.reflowDuration;
    this.animationDuration = rebirthUIConfig.carousel.animationDuration;
    this.animate = rebirthUIConfig.carousel.animate;
    this.interval = rebirthUIConfig.carousel.interval;
  }

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

  onActiveSlideChange(index, carouselDirection: CarouselDirection) {
    if (this.activeSlide === index) {
      return;
    }

    this.slideAnimation(carouselDirection, index)
      .then(() => {
        this.activeSlide = index;
        this.activeSlideChange.emit(this.activeSlide);
      });
  }

  @HostListener('mouseenter', [])
  pauseInterval() {
    this.stopInterval();
  }

  @HostListener('mouseleave', [])
  startInterval() {
    this.stopInterval();
    if (this.interval) {
      this.intervalId = setInterval(() => this.selectNextSlide(), this.interval);
    }
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }

  private slideAnimation(carouselDirection: CarouselDirection, index) {
    this.stopInterval();
    const slideItems = this.slideItems.toArray();
    const direction = carouselDirection === CarouselDirection.NEXT ? 'left' : 'right';
    const orderDirection = carouselDirection === CarouselDirection.NEXT ? 'next' : 'prev';

    const nextElement = slideItems[index].nativeElement;
    const currentElement = slideItems[this.activeSlide].nativeElement;
    this.renderer.addClass(nextElement, orderDirection);

    return animationTimeout(this.reflowDuration)
      .then(() => {
        this.renderer.addClass(currentElement, direction);
        this.renderer.addClass(nextElement, direction);
      })
      .then(() => animation(this.renderer, nextElement, this.animationDuration))
      .then(() => {
        this.renderer.removeClass(nextElement, orderDirection);
        this.renderer.removeClass(nextElement, direction);
        this.renderer.removeClass(currentElement, direction);
        this.startInterval();
      });
  }

  private stopInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
