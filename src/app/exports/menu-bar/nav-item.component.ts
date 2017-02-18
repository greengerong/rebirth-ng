import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MenuItem } from './menu-bar.model';

@Component({
  selector: 're-nav-item',
  templateUrl: './nav-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent implements OnInit {

  @Input() menus: MenuItem[] = [];
  @Input() right: boolean;
  @Input() direction: DropDirection;

  constructor() {
  }

  ngOnInit() {
  }

}
