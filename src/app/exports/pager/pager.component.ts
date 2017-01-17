import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 're-pager',
  templateUrl: './re-pager.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagerComponent implements OnChanges {
  @Input() total = 0;
  @Input() pageSize = 10;
  @Input() pageIndex = 1;
  @Output() pageIndexChange = new EventEmitter<number>();
  @Input() previousText = '« Previous';
  @Input() nextText = 'Next »';

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
    return this.pageIndex < this.totalPage();
  }

  totalPage(): number {
    return Math.ceil(this.total / this.pageSize);
  }

  ngOnChanges(): void {
    this.pageIndex = Math.max(Math.min(this.pageIndex, this.totalPage()), 1);
  }
}
