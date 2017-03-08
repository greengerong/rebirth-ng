import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { DataTableCellTmplComponent } from './data-table-cell-tmpl.component';

@Component({
  selector: 're-cell-templates',
  templateUrl: './data-table-cell-tmpls.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableCellTmplsComponent {

  @ViewChild('textCellTemplate') text: DataTableCellTmplComponent;

  getTemplate(fieldType: string): DataTableCellTmplComponent {
    return this[fieldType || 'text'] || this.text;
  }

  getCellFilterTemplate(column) {
    if (column.cellFilterCmp) {
      return column.cellFilterCmp.template;
    }

    const template = this.getTemplate(column.fieldType);
    return template.filter.template;
  }

  getCellViewTemplate(column) {
    if (column.cellCmp) {
      return column.cellCmp.template;
    }

    const template = this.getTemplate(column.fieldType);
    return template.view.template;
  }

  getCellEditTemplate(column) {
    if (column.cellEditCmp) {
      return column.cellEditCmp.template;
    }

    const template = this.getTemplate(column.fieldType);
    return template.edit.template;
  }

}
