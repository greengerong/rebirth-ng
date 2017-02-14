import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  imports: [CommonModule],
  exports: [BreadcrumbsComponent],
  declarations: [BreadcrumbsComponent],
  providers: [],
})
export class BreadcrumbsModule {
}
