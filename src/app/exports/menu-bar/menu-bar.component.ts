import { Component, ChangeDetectionStrategy, Input, ViewChild, ElementRef } from '@angular/core';
import { MenuBar } from './menu-bar.model';
import { stopPropagationIfExist } from '../utils/dom-utils';

@Component({
  selector: 're-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'menuBar'
})
export class MenuBarComponent {
  @Input() cssClass: string;
  @Input() type: 'navbar-fixed-top' | 'navbar-fixed-bottom' | 'container-fluid'
    | 'navbar-static-top' | 'navbar-static-bottom' | 'navbar-form' | 'sidebar';
  @Input() menuOptions: MenuBar = <MenuBar>{};
  @Input() direction: 'down' | 'up';
  @Input() inverse = false;
  showNavBar: boolean;

  constructor() {

  }

  toggle($event?: Event) {
    stopPropagationIfExist($event);
    this.onShowNavBarChange(!this.showNavBar);
  }

  hide($event?: Event) {
    stopPropagationIfExist($event);
    this.onShowNavBarChange(false);
  }

  onShowNavBarChange(showNavBar: boolean) {
    if (this.showNavBar !== showNavBar) {
      this.showNavBar = showNavBar;
    }
  }
}
