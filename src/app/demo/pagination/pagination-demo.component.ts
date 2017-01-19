import { Component } from '@angular/core';

@Component({
  selector: 're-pagination-demo',
  templateUrl: './pagination-demo.component.html'
})
export class PaginationDemoComponent {

  pager = {
    total: 306,
    pageIndex: 5,
    pageSize: 10
  };

  pageChange(pageIndex) {
    console.log(`Rebirth pager change to: ${pageIndex}`, this.pager);
  }

}
