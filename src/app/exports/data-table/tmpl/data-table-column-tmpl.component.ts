import { Component, ChangeDetectionStrategy, ContentChild, Input } from '@angular/core';
import { DataTableCellViewTmplComponent } from './data-table-cell-view-tmpl.component';
import { DataTableCellEditTmplComponent } from './data-table-cell-edit-tmpl.component';
import { DataTableCellFilterTmplComponent } from './data-table-cell-filter-tmpl.component';
import { formatDate } from '../../utils/date-utils';
import { RebirthNGConfig } from '../../rebirth-ng.config';

@Component({
  selector: 're-column',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableColumnTmplComponent {
  @Input() fieldType: 'text' | 'number' | 'tel' | 'mail' | 'image' | 'date' | 'datetime' | string = 'text';
  @Input() field: string;
  @Input() header: string;
  @Input() sortable: boolean;
  @Input() editable: boolean;
  @Input() filterable: boolean;
  @Input() cellClass: string;
  @Input() width: string;
  @Input() extraOptions: any;
  @ContentChild(DataTableCellViewTmplComponent) cellCmp: DataTableCellViewTmplComponent;
  @ContentChild(DataTableCellEditTmplComponent) cellEditCmp: DataTableCellEditTmplComponent;
  @ContentChild(DataTableCellFilterTmplComponent) cellFilterCmp: DataTableCellFilterTmplComponent;
  _formatter: (item: any) => string;

  constructor(private rebirthUIConfig: RebirthNGConfig) {

  }

  @Input() set formatter(formatter: (item: any) => string) {
    this._formatter = formatter;
  }

  get formatter() {
    return this._formatter || this.defaultFormatter.bind(this);
  }

  // column.extraOptions?.dateFormat

  defaultFormatter(item) {
    if (this.fieldType && this[this.fieldType]) {
      return this[this.fieldType](item);
    }
    return item && item.toString();
  }

  date(item) {
    const pattern = this.extraOptions && this.extraOptions.dateFormat ?
      this.extraOptions.dateFormat : this.rebirthUIConfig.datePicker.format.date;

    return item ? formatDate(item, pattern) : '';
  }

  datetime(item) {
    const pattern = this.extraOptions && this.extraOptions.dateFormat ?
      this.extraOptions.dateFormat : this.rebirthUIConfig.datePicker.format.time;

    return item ? formatDate(item, pattern) : '';
  }
}
