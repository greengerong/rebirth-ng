import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuBarComponent } from './menu-bar.component';
import { RouterModule } from '@angular/router';
import { NavItemComponent } from './nav-item.component';
import { RebirthCommonModule } from "../common";

@NgModule({
  imports: [CommonModule, RouterModule, RebirthCommonModule],
  exports: [MenuBarComponent],
  declarations: [MenuBarComponent, NavItemComponent],
  providers: [],
})
export class MenuBarModule {
}
