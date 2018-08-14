import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Breadcrumb } from 'rebirth-ng';
import * as Immutable from 'immutable';

@Component({
  selector: 're-breadcrumbs-demo',
  templateUrl: './breadcrumbs-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsDemoComponent {
  items = Immutable.List<Breadcrumb>([
    {
      text: 'Home',
      icon: 'glyphicon glyphicon-home',
      url: 'https://greengerong.github.io/rebirth-ng/',
    },
    {
      text: 'Library',
      icon: 'glyphicon glyphicon-heart',
      url: 'https://greengerong.github.io/rebirth-ng/compodocs/overview.html',
    },
    {
      text: 'Data',
      icon: 'glyphicon glyphicon-th-large',
      handle: item => console.log('Clicked', item)
    }
  ]);

  pushItem() {
    this.items = this.items.push({ text: 'Test', handle: item => console.log('Clicked', item) });
  }

  removeLastItem() {
    this.items = this.items.remove(this.items.size - 1);
  }

}
