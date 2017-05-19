import { Component, ElementRef, Input } from '@angular/core';
import { MenuBar } from './menu-bar.model';

@Component({
  selector: 're-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  exportAs: 'menuBar'
})
export class MenuBarComponent {
  @Input() cssClass: string;
  @Input() type: 'navbar-fixed-top' | 'navbar-fixed-bottom' | 'container-fluid'
    | 'navbar-static-top' | 'navbar-static-bottom' | 'navbar-form' | 'sidebar';
  @Input() contentType: 'container-fluid' | 'container' = 'container';
  @Input() menuOptions: MenuBar = <MenuBar>{};
  @Input() direction: 'down' | 'up';
  @Input() inverse = false;
  showNavBar: boolean;
  sidebarOpen: boolean;

  constructor(private elementRef: ElementRef) {

  }

  toggle() {
    this.onShowNavBarChange(!this.showNavBar);
  }

  hide($event?: Event) {
    if (!this.elementRef.nativeElement.contains($event.target)) {
      this.onShowNavBarChange(false);
    }
  }

  onShowNavBarChange(showNavBar: boolean) {
    if (this.showNavBar !== showNavBar) {
      this.showNavBar = showNavBar;
    }
  }

  isRouter(url) {
    return url instanceof Array;
  }
}
