import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Breadcrumb } from './breadcrumbs.model';

@Component({
  selector: 're-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {
  @Input() items: Breadcrumb[] = [];
  @Input() cssClass: string;

  constructor() {
  }

  ngOnInit() {
  }

  itemClick(item: Breadcrumb) {
    if (item.handle) {
      item.handle(item);
    }
  }
}
