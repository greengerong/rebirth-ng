import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuBarComponent } from './menu-bar.component';
import { DropdownDirective } from './dropdown.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [MenuBarComponent],
  declarations: [MenuBarComponent, DropdownDirective],
  providers: [],
})
export class MenuBarModule {
}
