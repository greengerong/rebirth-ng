import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { formatDate } from '../../exports/utils/date-utils';
import { RowCheckChangeEventArg, SortChangeEventArg } from '../../exports/data-table/data-table.model';
import { DataTableComponent } from '../../exports/data-table/data-table.component';

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
      score: 59

    },
    {
      id: 3,
      firstName: 'Larry',
      lastName: 'the Bird',
      dob: new Date(1991, 3, 1),
      score: 70
    },

  ];
  filterDataSource = [];

  constructor() {
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
      return !search.some(query => item[query.key].toLowerCase().indexOf(query.value.toLowerCase()) === -1);
    });
  }

}
