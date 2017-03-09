import { Component, OnInit } from '@angular/core';

@Component({
  selector: 're-infinite-scroll-demo',
  templateUrl: './infinite-scroll-demo.component.html'
})
export class InfiniteScrollDemoComponent implements OnInit {
  dataSource = [];
  total = 100;
  complete = false;
  next = 0;

  constructor() {
  }

  ngOnInit() {
  }

  loadMore() {
    for (let i = 0; i < 10; i++, this.next++) {
      this.dataSource.push({ id: this.next, name: `Name ${this.next}`, age: 10 });
    }

    if (this.next >= 100) {
      this.complete = true;
    }
    console.log(`load more`, this.next, this.complete);
  }
}
