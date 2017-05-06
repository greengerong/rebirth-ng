import { Component, Input } from '@angular/core';
import { MenuItem } from './menu-bar.model';

@Component({
  selector: 're-nav-item',
  styleUrls: ['./nav-item.component.scss'],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {

  @Input() menus: MenuItem[] = [];
  @Input() right: boolean;
  @Input() direction: 'down' | 'up';
}
