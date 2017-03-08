import { Component, ChangeDetectionStrategy, Input, HostListener } from '@angular/core';
import { DataTableColumnTmplComponent } from './data-table-column-tmpl.component';
import { DataTableComponent } from './data-table.component';
import { DataTableCellTmplsComponent } from './data-table-cell-tmpls.component';

@Component({
  selector: 're-data-table-cell,[reDataTableCell]',
  templateUrl: './data-table-Cell.component.html',
  host: {
    '[class]': 'column.cellClass ? column.cellClass : ""',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableCellComponent {
  @Input() rowIndex: number;
  @Input() colIndex: number;
  @Input() column: DataTableColumnTmplComponent;
  @Input() rowItem: any;
  @Input() cellTemplates: DataTableCellTmplsComponent;

  isCellEdit: boolean;

  constructor(public dt: DataTableComponent) {
  }

  @HostListener('click', ['$event'])
  onCellClick($event) {
    const cellSelectedEventArg = {
      rowIndex: this.rowIndex,
      colIndex: this.colIndex,
      column: this.column,
      rowItem: this.rowItem
    };

    this.dt.onCellClick(cellSelectedEventArg);
    if (this.column.editable) {
      $event.stopPropagation();
      this.isCellEdit = true;
      this.dt.onCellEditStart(cellSelectedEventArg);
    }
  }

  @HostListener('document:click', ['$event'])
  onFinishCellEdit($event) {
    this.isCellEdit = false;
    if ($event) {
      $event.stopPropagation();
    }

    this.dt.onCellEditEnd({
      rowIndex: this.rowIndex,
      colIndex: this.colIndex,
      column: this.column,
      rowItem: this.rowItem
    });
  }

  @HostListener('dbclick', ['$event'])
  onCellDBClick($event) {
    const cellSelectedEventArg = {
      rowIndex: this.rowIndex,
      colIndex: this.colIndex,
      column: this.column,
      rowItem: this.rowItem
    };
    this.dt.onCellDBClick(cellSelectedEventArg);
  }

  getCellValue(column: DataTableColumnTmplComponent, rowIndex: number, rowItem: any) {
    if (!column || !column.field) {
      return null;
    }

    if (column.field === '$index') {
      return rowIndex + 1;
    }
    return rowItem[column.field];

    /*
     * field with dot, like address.line1
     const fields = column.field.split('.');
     return fields.reduce((obj, field) => obj ? obj[field] : null, rowItem);
     */
  }

  getCellFormatValue(column: DataTableColumnTmplComponent, rowIndex: number, rowItem: any) {
    const cellValue = this.getCellValue(column, rowIndex, rowItem);
    if (column.field !== '$index' && column.formatter) {
      return column.formatter(cellValue);
    }
    return cellValue;
  }
}
