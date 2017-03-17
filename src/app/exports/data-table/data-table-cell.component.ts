import {
  Component, ChangeDetectionStrategy, Input, HostListener, ChangeDetectorRef, OnInit,
  OnDestroy
} from '@angular/core';
import { DataTableColumnTmplComponent } from './tmpl/data-table-column-tmpl.component';
import { DataTableComponent } from './data-table.component';
import { DataTableTmplsComponent } from './tmpl/data-table-tmpls.component';
import { DataTableRowComponent } from './data-table-row.component';
import { Subscription } from 'rxjs/Subscription';
import { stopPropagationIfExist } from '../utils/dom-utils';

@Component({
  selector: 're-data-table-cell,[reDataTableCell]',
  templateUrl: './data-table-cell.component.html',
  host: {
    '[class]': 'column.cellClass ? column.cellClass : ""',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableCellComponent implements OnInit, OnDestroy {
  @Input() rowIndex: number;
  @Input() colIndex: number;
  @Input() column: DataTableColumnTmplComponent;
  @Input() rowItem: any;
  @Input() dataTableTemplates: DataTableTmplsComponent;
  @Input() editModel: DataTableEditModel;
  @Input() isEditRow: boolean;

  isCellEdit: boolean;
  forceUpdateSubscription: Subscription;
  documentClickubscription: Subscription;

  constructor(public dt: DataTableComponent, private changeDetectorRef: ChangeDetectorRef,
              private rowComponent: DataTableRowComponent) {
  }

  ngOnInit(): void {
    this.forceUpdateSubscription = this.rowComponent.forceUpdateEvent.subscribe(_ => this.forceUpdate());
  }

  @HostListener('click', ['$event'])
  onCellClick($event) {
    const cellSelectedEventArg = {
      rowIndex: this.rowIndex,
      colIndex: this.colIndex,
      column: this.column,
      rowItem: this.rowItem,
      cellComponent: this,
      rowComponent: this.rowComponent
    };

    this.dt.onCellClick(cellSelectedEventArg);
    if (this.column.editable && this.editModel === 'cell') {
      stopPropagationIfExist($event);
      this.isCellEdit = true;
      this.documentClickubscription = this.dt.documentClickEvent.subscribe(_ => this.onFinishCellEdit());
      this.dt.onCellEditStart(cellSelectedEventArg);
    }
  }

  forceUpdate() {
    this.changeDetectorRef.markForCheck();
  }

  onFinishCellEdit($event?: Event) {
    if (this.editModel !== 'cell') {
      return;
    }
    this.isCellEdit = false;
    this.unSubscription(this.documentClickubscription);
    stopPropagationIfExist($event);

    this.dt.onCellEditEnd({
      rowIndex: this.rowIndex,
      colIndex: this.colIndex,
      column: this.column,
      rowItem: this.rowItem,
      cellComponent: this,
      rowComponent: this.rowComponent
    });
  }

  @HostListener('dbclick', ['$event'])
  onCellDBClick($event) {
    const cellSelectedEventArg = {
      rowIndex: this.rowIndex,
      colIndex: this.colIndex,
      column: this.column,
      rowItem: this.rowItem,
      cellComponent: this,
      rowComponent: this.rowComponent
    };
    this.dt.onCellDBClick(cellSelectedEventArg);
  }

  isCellEditEnable(column, rowItem) {
    if (this.editModel === 'cell') {
      return this.isCellEdit;
    }

    return this.isEditRow;
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

  ngOnDestroy(): void {
    this.unSubscription(this.forceUpdateSubscription);
    this.unSubscription(this.documentClickubscription);
  }

  private unSubscription(sbscription: Subscription) {
    if (sbscription) {
      sbscription.unsubscribe();
      sbscription = null;
    }
  }
}
