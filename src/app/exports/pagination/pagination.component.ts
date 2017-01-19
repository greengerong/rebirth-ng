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
  @Input() boundary = true;
  @Input() total = 0;
  @Input() pageSize = 10;
  @Input() pageIndex = 1;
  @Output() pageIndexChange = new EventEmitter<number>();
  @Input() disable = false;
  @Input() maxItems = 6;
  minShowPage = 0;
  maxShowPage = 0;
  showPages = [];

  constructor() {
  }

  first() {
    if (this.pageIndex !== 1) {
      this.onPageIndexChange(1);
    }
  }

  last() {
    const last = Math.max(this.totalPage(), 1);
    if (this.pageIndex !== last) {
      this.onPageIndexChange(last);
    }
  }

  prev(): void {
    if (this.hasPrev()) {
      this.onPageIndexChange(--this.pageIndex);
    }
  }

  next(): void {
    if (this.hasNext()) {
      this.onPageIndexChange(++this.pageIndex);
    }
  }

  onPageIndexChange(pageIndex: number) {
    this.pageIndexChange.emit(pageIndex);
  }

  hasPrev(): boolean {
    return this.pageIndex > 1;
  }

  hasNext(): boolean {
    return this.pageIndex < this.totalPage();
  }

  totalPage(): number {
    return Math.ceil(this.total / this.pageSize);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pageIndex = Math.max(Math.min(this.pageIndex, this.totalPage()), 1);
    this.changeShowPages();
  }

  private changeShowPages() {
    const totalPage = this.totalPage();
    if (!totalPage) {
      this.showPages = [];
      return;
    }

    // if (totalPage <= this.maxItems) {
    //   this.showPages = new Array<number>(totalPage).fill(0).map((_, i) => i + 1);
    //   return;
    // }

    const showPages = [this.pageIndex];
    let start = this.pageIndex - 1;
    let end = this.pageIndex + 1;
    while (showPages.length < this.maxItems && (start > 0 || end <= totalPage)) {
      if (start > 0) {
        showPages.unshift((start--));
      }
      if (showPages.length < this.maxItems && end <= totalPage) {
        showPages.push(end++);
      }
    }
    this.showPages = showPages;
  }
}
