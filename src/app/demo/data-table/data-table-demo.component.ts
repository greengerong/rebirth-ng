import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { formatDate } from '../../exports/utils/date-utils';

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

  constructor() {
  }

  ngOnInit() {
  }

  dobFormat(item) {
    return item ? formatDate(item, 'YYYY-MM-DD') : '';
  }

}
