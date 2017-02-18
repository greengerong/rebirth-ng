import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuBarComponent } from './menu-bar.component';
import { DropdownDirective } from './dropdown.directive';
import { RouterModule } from '@angular/router';
import { NavItemComponent } from './nav-item.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [MenuBarComponent],
  declarations: [MenuBarComponent, DropdownDirective, NavItemComponent],
  providers: [],
})
export class MenuBarModule {
}
