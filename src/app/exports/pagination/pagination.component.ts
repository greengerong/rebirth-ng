import {
  Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 're-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnChanges {
  static EFFECT_PAGE_RANGE_KEYS = ['total', 'pageSize', 'pageIndex', 'maxItems'];

  @Input() boundary = true;
  @Input() total = 0;
  @Input() pageSize = 10;
  @Input() pageIndex = 1;
  @Output() pageIndexChange = new EventEmitter<number>();
  @Input() maxItems = 5;
  showPages = [];
  totalPage = 0;

  constructor() {
  }

  first() {
    if (this.pageIndex !== 1) {
      this.onPageIndexChange(1);
    }
  }

  last() {
    const last = Math.max(this.totalPage, 1);
    if (this.pageIndex !== last) {
      this.onPageIndexChange(last);
    }
  }

  prev(): void {
    if (this.hasPrev()) {
      this.onPageIndexChange(this.pageIndex - 1);
    }
  }

  next(): void {
    if (this.hasNext()) {
      this.onPageIndexChange(this.pageIndex + 1);
    }
  }

  preRange() {
    const pre = this.showPages[0] - 1;
    this.onPageIndexChange(Math.max(pre, 1));
  }

  nextRange() {
    const next = this.showPages[this.showPages.length - 1] + 1;
    this.onPageIndexChange(Math.min(next, this.totalPage));
  }

  onPageIndexChange(pageIndex: number) {
    if (this.pageIndex !== pageIndex) {
      this.pageIndexChange.emit(pageIndex);
    }
  }

  hasPrev(): boolean {
    return this.pageIndex > 1;
  }

  hasNext(): boolean {
    return this.pageIndex < this.totalPage;
  }

  private getTotalPage(): number {
    return Math.ceil(this.total / this.pageSize);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const shouldUpdateRanges = PaginationComponent.EFFECT_PAGE_RANGE_KEYS.some(key => !!changes[key]);
    if (shouldUpdateRanges) {
      this.totalPage = this.getTotalPage();
      this.pageIndex = Math.max(Math.min(this.pageIndex, this.totalPage), 1);
      this.changeShowPages();
    }
  }

  private changeShowPages() {
    if (!this.totalPage) {
      this.showPages = [];
      return;
    }

    if (this.totalPage <= this.maxItems) {
      this.showPages = new Array<number>(this.totalPage).fill(0).map((_, i) => i + 1);
      return;
    }

    const showPages = [this.pageIndex];

    let start = this.pageIndex - 1;
    let end = this.pageIndex + 1;
    while (showPages.length < this.maxItems && (start > 0 || end <= this.totalPage)) {
      if (start > 0) {
        showPages.unshift((start--));
      }
      if (showPages.length < this.maxItems && end <= this.totalPage) {
        showPages.push(end++);
      }
    }
    this.showPages = showPages;
  }
}
