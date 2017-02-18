import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MenuBar } from './menu-bar.model';

@Component({
  selector: 're-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'menuBar'
})
export class MenuBarComponent {
  @Input() cssClass: string;
  @Input() type: NavbarType;
  @Input() menuOptions: MenuBar = <MenuBar>{};
  showNavBar: boolean;

  constructor() {

  }

  toggle($event?: Event) {
    if ($event) {
      $event.stopPropagation();
    }
    this.showNavBar = !this.showNavBar;
  }

  hide($event?: Event) {
    if ($event) {
      $event.stopPropagation();
    }
    this.showNavBar = false;
  }

}
