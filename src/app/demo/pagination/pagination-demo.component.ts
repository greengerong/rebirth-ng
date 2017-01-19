import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 're-pagination-demo',
  templateUrl: './pagination-demo.component.html'
})
export class PaginationDemoComponent {

  pager = {
    total: 106,
    pageIndex: 1,
    pageSize: 10
  };

  pageChange(pageIndex) {
    console.log(`Rebirth pager change to: ${pageIndex}`, this.pager);
  }

}
