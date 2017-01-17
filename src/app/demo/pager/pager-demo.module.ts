import { NgModule } from '@angular/core';

import { PagerDemoComponent } from './pager-demo.component';
import { PagerModule } from '../../exports/pager';

@NgModule({
  imports: [
    PagerModule
  ],
  declarations: [
    PagerDemoComponent
  ],
  exports: [
    PagerDemoComponent
  ],
  providers: [],
})
export class PagerDemoModule {
}
