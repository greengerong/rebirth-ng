import {
  Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener,
  ElementRef, Renderer, OnDestroy
} from '@angular/core';
import { WindowRef } from '../window-ref/window-ref.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 're-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'infiniteScroll'
})
export class InfiniteScrollComponent implements OnInit, OnDestroy {

  @Input() total: number;
  @Input() bufferPx = 40;
  @Input() scrollDelay = 300;
  @Output() loadMore = new EventEmitter<InfiniteScrollComponent>();
  scrollStream = new EventEmitter<Event>();
  subscription: Subscription;

  constructor(private windowRef: WindowRef, private elementRef: ElementRef, private renderer: Renderer) {

  }

  @Input() set complete(complete: boolean) {
    if (complete) {
      this.unSubscription();
      return;
    }

    this.setupScrollEvent();
  }


  ngOnInit(): void {
    this.setupScrollEvent();
  }

  private setupScrollEvent() {
    if (!this.subscription) {
      this.subscription = this.registerOnScrollStream(this.scrollStream)
        .subscribe($event => this.onScrollChange($event));
    }
  }

  onScrollChange($event: Event) {
    const winHeight = this.windowRef.innerHeight;
    const clientRect = this.windowRef.getBoundingClientRect(this.elementRef);
    if (clientRect && winHeight - clientRect.top >= this.bufferPx) {
      this.loadMore.emit(this);
    }

  }

  @HostListener('window:scroll', ['$event'])
  onWinScroll($event: Event) {
    this.scrollStream.emit($event);
  }

  ngOnDestroy(): void {
    this.unSubscription();
  }

  private unSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  private registerOnScrollStream(scrollStream: EventEmitter<UIEvent>) {
    return scrollStream
      .debounceTime(this.scrollDelay)
      .distinctUntilChanged();
  }
}
