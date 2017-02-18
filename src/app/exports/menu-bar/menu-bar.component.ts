import { Component, ChangeDetectionStrategy, Input, ViewChild, ElementRef } from '@angular/core';
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
    this.onShowNavBarChange(!this.showNavBar);
  }

  hide($event?: Event) {
    if ($event) {
      $event.stopPropagation();
    }
    this.onShowNavBarChange(false);
  }

  onShowNavBarChange(showNavBar: boolean) {
    if (this.showNavBar !== showNavBar) {
      this.showNavBar = showNavBar;
    }
  }
}
