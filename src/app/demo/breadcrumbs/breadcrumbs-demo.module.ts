import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsDemoComponent } from './breadcrumbs-demo.component';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';

@NgModule({
  imports: [CommonModule, RebirthUIModule],
  exports: [BreadcrumbsDemoComponent],
  declarations: [BreadcrumbsDemoComponent],
  providers: [],
  entryComponents: [BreadcrumbsDemoComponent]
})
export class BreadcrumbsDemoModule {
}
