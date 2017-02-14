import { Component, OnInit, ChangeDetectionStrategy, Input, Optional } from '@angular/core';
import { Breadcrumb } from './breadcrumbs.model';
import { Router } from '@angular/router';
import { WindowRef } from '../window-ref/window-ref.service';

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
    item.handle(item);
  }
}
