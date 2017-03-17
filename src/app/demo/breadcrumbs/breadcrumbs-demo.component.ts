import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Breadcrumb } from '../../exports/breadcrumbs/breadcrumbs.model';
import * as Immutable from 'immutable';

@Component({
  selector: 're-breadcrumbs-demo',
  templateUrl: './breadcrumbs-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsDemoComponent implements OnInit {
  items = Immutable.List<Breadcrumb>([
    {
      text: 'Home',
      icon: 'glyphicon glyphicon-home',
      url: 'http://greengerong.com/ng2-rebirth-ui/',
      target: '_blank'
    },
    {
      text: 'Library',
      icon: 'glyphicon glyphicon-heart',
      url: 'http://greengerong.com/ng2-rebirth-ui/compodocs/overview.html',
      target: '_blank'
    },
    {
      text: 'Data',
      icon: 'glyphicon glyphicon-th-large',
      handle: item => console.log('Clicked', item)
    }
  ]);

  constructor() {
  }

  ngOnInit() {
  }

  pushItem() {
    this.items = this.items.push({ text: 'Test', handle: item => console.log('Clicked', item) });
  }

  removeLastItem() {
    this.items = this.items.remove(this.items.size - 1);
  }

}
