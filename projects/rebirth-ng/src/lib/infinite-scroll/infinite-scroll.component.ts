import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  OnDestroy,
  TemplateRef
} from '@angular/core';
import { WindowRef } from '../window-ref/window-ref.service';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 're-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'infiniteScroll'
})
export class InfiniteScrollComponent implements OnInit, OnDestroy {

  @Input() total: number;
  @Input() bufferPx = 40;
  @Input() scrollDelay = 300;
  @Input() spinnerTemplate: TemplateRef<any>;
  @Output() loadMore = new EventEmitter<InfiniteScrollComponent>();
  scrollStream = new EventEmitter<any>();
  subscription: Subscription;

  constructor(private windowRef: WindowRef, private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this.setupScrollEvent();
    setTimeout(_ => this.onWinScroll(null));
  }

  loadFinish(complete: boolean) {
    if (complete) {
      return this.unSubscription();
    }

    setTimeout(_ => this.onWinScroll(null), this.scrollDelay);
  }

  private setupScrollEvent() {
    if (!this.subscription) {
      this.subscription = this.registerOnScrollStream(this.scrollStream)
        .subscribe(_ => this.onScrollChange());
    }
  }

  onScrollChange() {
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
    return scrollStream.pipe(
      debounceTime(this.scrollDelay),
      distinctUntilChanged()
    );
  }
}
