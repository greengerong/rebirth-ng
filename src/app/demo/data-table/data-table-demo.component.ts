import {
  Component,
  ChangeDetectionStrategy,
  Pipe,
  PipeTransform,
  ComponentFactoryResolver,
  EventEmitter
} from '@angular/core';
import {
  RowCheckChangeEventArg,
  SortChangeEventArg,
  DataTablePager,
  RowSelectedEventArg,
  DataTableComponent,
  ModalDismissReasons,
  ModalService,
  Modal,
  DataTableRowComponent
} from '../../exports';
import * as Immutable from 'immutable';

@Component({
  selector: 're-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableDemoComponent {

  dataSource = Immutable.List([
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      dob: new Date(1990, 12, 1),
      sex: 'male',
      score: 80
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      sex: 'female',
      dob: new Date(1989, 1, 1),
      score: 43
    },
    {
      id: 3,
      firstName: 'Danni',
      lastName: 'Chen',
      sex: 'female',
      dob: new Date(1991, 3, 1),
      score: 80
    },
    {
      id: 4,
      firstName: 'green',
      lastName: 'gerong',
      sex: 'male',
      dob: new Date(1991, 3, 1),
      score: 98
    },
    {
      id: 5,
      firstName: 'po',
      lastName: 'lang',
      sex: 'male',
      dob: new Date(1991, 3, 1),
      score: 80
    },
    {
      id: 6,
      firstName: 'john',
      lastName: 'li',
      sex: 'female',
      dob: new Date(1991, 3, 1),
      score: 70
    },
    {
      id: 7,
      firstName: 'peng',
      lastName: 'li',
      sex: 'female',
      dob: new Date(1991, 3, 1),
      score: 27
    },
    {
      id: 8,
      firstName: 'Danni',
      lastName: 'Yu',
      sex: 'female',
      dob: new Date(1991, 3, 1),
      score: 74
    },

  ]);

  emptyDataSource = Immutable.List([]);
  emptyRowText = '暂时没有相关数据';

  dataTableOptions = {
    columns: [
      {
        field: 'firstName',
        header: 'First Name',
        fieldType: 'text',
        sortable: true,
        editable: true
      },
      {
        field: 'lastName',
        header: 'Last Name',
        fieldType: 'text',
        sortable: true,
        editable: true
      },
      {
        field: 'dob',
        header: 'Date of birth',
        fieldType: 'date',
        sortable: true,
        editable: true
      },
      {
        field: 'score',
        header: 'Score',
        fieldType: 'number',
        sortable: true,
        editable: true
      }
    ]
  };
  pager: DataTablePager = {
    total: 306,
    pageIndex: 5,
    pageSize: 10,
  };
  filterDataSource: Immutable.List<any>;

  constructor(private modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) {
    this.filterDataSource = Immutable.List(this.dataSource);
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
  transform(value: Immutable.List<any>, args: any[]): any {
    if (value) {
      const field = args[0];
      const svg = value.reduce((sum, item) => sum + item[field], 0) / value.size;
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
          <re-column field="dob" header="Date of birth" [fieldType]="'date'"></re-column>
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
  dataSource = Immutable.List([
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
    }]);

  rowClick($event: RowSelectedEventArg) {
    this.selectItem = $event.rowItem;
  }

  rowDBClick($event: RowSelectedEventArg) {
    this.selectItem = $event.rowItem;
    this.ok();
  }

  ok() {
    this.dismiss.emit(this.selectItem);
  }

  cancel() {
    this.dismiss.error(ModalDismissReasons.NO);
  }
}
