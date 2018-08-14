import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsDemoComponent } from './breadcrumbs-demo.component';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  imports: [CommonModule, RebirthNGModule],
  exports: [BreadcrumbsDemoComponent],
  declarations: [BreadcrumbsDemoComponent],
  providers: [],
  entryComponents: [BreadcrumbsDemoComponent]
})
export class BreadcrumbsDemoModule {
}
