import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuBarDemoComponent } from './menu-bar-demo.component';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RebirthUIModule, FormsModule],
  exports: [MenuBarDemoComponent],
  declarations: [MenuBarDemoComponent],
  providers: [],
  entryComponents: [MenuBarDemoComponent]
})
export class MenuBarDemoModule {
}
