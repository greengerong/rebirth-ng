import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-pager-demo',
  templateUrl: './pager-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagerDemoComponent {
  pager = {
    total: 106,
    pageIndex: 5,
    pageSize: 10
  };

  pageChange(pageIndex) {
    console.log(`Rebirth pager change to: ${pageIndex}`, this.pager);
  }

}
