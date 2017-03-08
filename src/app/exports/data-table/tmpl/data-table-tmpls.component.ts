import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { DataTableCellTmplComponent } from './data-table-cell-tmpl.component';

@Component({
  selector: 're-data-table-templates',
  templateUrl: './data-table-tmpls.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableTmplsComponent {

  @ViewChild('defaultHeadTemplate') headTemplate: TemplateRef<any>;
  @ViewChild('textCellTemplate') text: DataTableCellTmplComponent;

  getTemplate(fieldType: string): DataTableCellTmplComponent {
    return this[fieldType || 'text'] || this.text;
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

  getCellFilterTemplate(column) {
    if (column.cellFilterCmp) {
      return column.cellFilterCmp.template;
    }

    const template = this.getTemplate(column.fieldType);
    return template.filter.template;
  }

}
