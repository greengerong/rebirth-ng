import {
  Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 're-pager',
  templateUrl: './re-pager.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagerComponent implements OnChanges {
  static EFFECT_PAGE_RANGE_KEYS = ['total', 'pageSize', 'pageIndex'];
  @Input() total = 0;
  @Input() pageSize = 10;
  @Input() pageIndex = 1;
  @Output() pageIndexChange = new EventEmitter<number>();
  @Input() aligned = true;
  @Input() previousText = '« Previous';
  @Input() nextText = 'Next »';
  @Input() disable = false;
  totalPage = 0;

  prev(): void {
    if (this.hasPrev()) {
      this.pageIndexChange.emit(--this.pageIndex);
    }
  }

  next(): void {
    if (this.hasNext()) {
      this.pageIndexChange.emit(++this.pageIndex);
    }
  }

  hasPrev(): boolean {
    return this.pageIndex > 1;
  }

  hasNext(): boolean {
    return this.pageIndex < this.totalPage;
  }

  private getTotalPage() {
    return Math.ceil(this.total / this.pageSize);
  }


  ngOnChanges(changes: SimpleChanges): void {
    const shouldUpdateRanges = PagerComponent.EFFECT_PAGE_RANGE_KEYS.some(key => !!changes[key]);
    if (shouldUpdateRanges) {
      this.totalPage = this.getTotalPage();
      this.pageIndex = Math.max(Math.min(this.pageIndex, this.totalPage), 1);
    }
  }
}
