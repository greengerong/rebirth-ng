import { Component, OnInit } from '@angular/core';
import { InfiniteScrollComponent } from '../../exports/infinite-scroll/infinite-scroll.component';
import * as Immutable from 'immutable';

@Component({
  selector: 're-infinite-scroll-demo',
  templateUrl: './infinite-scroll-demo.component.html'
})
export class InfiniteScrollDemoComponent implements OnInit {
  dataSource = Immutable.List([]);
  total = 500;
  complete = false;
  next = 1;

  constructor() {
  }

  ngOnInit() {
  }

  loadMore(infiniteScroll: InfiniteScrollComponent) {
    if (this.next > this.total) {
      return;
    }


    const end = this.next + 100;
    const dataSource = [];
    for (; this.next < end; this.next++) {
      dataSource.push({ id: this.next, name: `Name ${this.next}`, age: 10 });
    }

    this.dataSource = this.dataSource.push(...dataSource);
    this.complete = this.next > this.total;
    infiniteScroll.loadFinish(this.complete);
    console.log(`load more`, this.next, this.complete);
  }
}
