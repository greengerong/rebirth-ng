import {
  Component, OnInit, ChangeDetectionStrategy, Pipe, PipeTransform,
  ComponentFactoryResolver, EventEmitter
} from '@angular/core';
import { formatDate } from '../../exports/utils/date-utils';
import {
  RowCheckChangeEventArg, SortChangeEventArg, DataTablePager,
  RowSelectedEventArg
} from '../../exports/data-table/data-table.model';
import { DataTableComponent } from '../../exports/data-table/data-table.component';
import { ModalService } from '../../exports/modal/modal.service';
import { Modal } from '../../exports/modal/modal.model';
import { ModalDismissReasons } from '../../exports/modal/modal-dismiss-reasons.model';
import { DataTableRowComponent } from '../../exports/data-table/data-table-row.component';

@Component({
  selector: 're-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableDemoComponent implements OnInit {

  dataSource = [
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      dob: new Date(1990, 12, 1),
      score: 80
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      dob: new Date(1989, 1, 1),
      score: 43

    },
    {
      id: 3,
      firstName: 'Danni',
      lastName: 'Chen',
      dob: new Date(1991, 3, 1),
      score: 80
    },
    {
      id: 4,
      firstName: 'green',
      lastName: 'gerong',
      dob: new Date(1991, 3, 1),
      score: 98
    },
    {
      id: 5,
      firstName: 'po',
      lastName: 'lang',
      dob: new Date(1991, 3, 1),
      score: 80
    },
    {
      id: 6,
      firstName: 'john',
      lastName: 'li',
      dob: new Date(1991, 3, 1),
      score: 70
    },
    {
      id: 7,
      firstName: 'peng',
      lastName: 'li',
      dob: new Date(1991, 3, 1),
      score: 27
    },
    {
      id: 8,
      firstName: 'Danni',
      lastName: 'Yu',
      dob: new Date(1991, 3, 1),
      score: 74
    },

  ];

  pager: DataTablePager = {
    total: 306,
    pageIndex: 5,
    pageSize: 10,
  };
  filterDataSource = [];

  constructor(private modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) {
    this.filterDataSource = [...this.dataSource];
  }

  ngOnInit() {
  }

  dobFormat(item) {
    return item ? formatDate(item, 'YYYY-MM-DD') : '';
  }

  sortChange($event: SortChangeEventArg) {
    this.dataSource = this.dataSource.sort((a, b) => {
      const first = a[$event.field].toString();
      const second = b[$event.field].toString();
      const factor = $event.direction === 'ASC' ? 1 : -1;
      return factor * first.localeCompare(second);
    });
  }

  onCheckAllChange($event: boolean, checkedTable: DataTableComponent) {
    console.log('All checked change', $event, checkedTable.getCheckRows());
  }

  onRowCheckChange($event: RowCheckChangeEventArg, checkedTable: DataTableComponent) {
    console.log('Row checked change', $event, checkedTable.getCheckRows());
  }

  onSearchQueryChange($event: { [key: string]: any; }) {
    const search = Object.keys($event)
      .map(key => ({ key, value: $event[key] }))
      .filter(item => item.value);

    console.log('Got search query:', $event);
    this.filterDataSource = this.dataSource.filter(item => {
      return !search.some(query => (item[query.key] ? item[query.key].toString() : '')
        .toLowerCase().indexOf(query.value.toString().toLowerCase()) === -1);
    });
  }

  onPageIndexChange($event) {
    console.log('Page index change', $event);
  }

  editRow(table, rowItem) {
    const editModel = {
      id: rowItem.id,
      firstName: rowItem.firstName,
      lastName: rowItem.lastName,
      dob: rowItem.dob,
      score: rowItem.score,
    };

    table.editRow(rowItem, editModel);
  }

  saveRow(table, rowItem) {
    const editModel = table.endEditRow(rowItem);
    rowItem.firstName = editModel.firstName;
    rowItem.lastName = editModel.lastName;
    rowItem.dob = editModel.dob;
    rowItem.score = editModel.score;
  }

  cancelRow(table, rowItem) {
    table.endEditRow(rowItem);
  }

  choosePeople(row: DataTableRowComponent, rowItem: any) {
    this.modalService.open<any>({
      component: ModalPeopleComponent,
      componentFactoryResolver: this.componentFactoryResolver
    })
      .subscribe(data => {
        Object.assign(rowItem, data);
        row.forceUpdate();
        console.log('Rebirth Modal -> Get ok with result:', data);

      }, error => {
        console.error('Rebirth Modal -> Get cancel with result:', error);
      });
  }
}


@Pipe({
  name: 'reAVG'
})

export class AVGPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    if (value) {
      const field = args[0];
      const svg = value.reduce((sum, item) => sum + item[field], 0) / value.length;
      return svg.toFixed(2);
    }
  }
}

@Component({
  selector: 're-modal-people',
  template: `
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="cancel()">
    <span aria-hidden="true">&times;</span></button>
    <h4 class="modal-title">Peoples</h4>
  </div>
  <div class="modal-body">
     <table class="table">
       <re-data-table [dataSource]="dataSource" [selectable]="true" (rowClick)="rowClick($event)" (rowDBClick)="rowDBClick($event)">
          <re-column field="$index" header="#"></re-column>
          <re-column field="firstName" header="First Name"></re-column>
          <re-column field="lastName" header="Last Name"></re-column>
          <re-column field="dob" header="Date of birth" [formatter]="dobFormat"></re-column>
           <re-column field="score" [sortable]="true" header="Score"></re-column>
       </re-data-table>
     </table>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-primary" (click)="ok()">Ok</button>
    <button type="button" class="btn btn-warning" (click)="cancel()">Cancel</button>
  </div>`
})
export class ModalPeopleComponent implements Modal {
  context: { text: string };
  dismiss: EventEmitter<string>;
  selectItem: any;
  dataSource = [
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      dob: new Date(1990, 12, 1),
      score: 80
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      dob: new Date(1989, 1, 1),
      score: 43

    },
    {
      id: 3,
      firstName: 'Danni',
      lastName: 'Chen',
      dob: new Date(1991, 3, 1),
      score: 80
    }];

  constructor() {
  }

  rowClick($event: RowSelectedEventArg) {
    this.selectItem = $event.rowItem;
  }

  rowDBClick($event: RowSelectedEventArg) {
    this.selectItem = $event.rowItem;
    this.ok();
  }

  dobFormat(item) {
    return item ? formatDate(item, 'YYYY-MM-DD') : '';
  }

  ok() {
    this.dismiss.emit(this.selectItem);
  }

  cancel() {
    this.dismiss.error(ModalDismissReasons.NO);
  }
}
