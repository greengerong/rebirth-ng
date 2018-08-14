import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuBarDemoComponent } from './menu-bar-demo.component';
import { RebirthNGModule } from 'rebirth-ng';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RebirthNGModule, FormsModule],
  exports: [MenuBarDemoComponent],
  declarations: [MenuBarDemoComponent],
  providers: [],
  entryComponents: [MenuBarDemoComponent]
})
export class MenuBarDemoModule {
}
