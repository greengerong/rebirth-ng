import { NgModule } from '@angular/core';

import { InfiniteScrollDemoComponent } from './infinite-scroll-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthUIModule } from '../../exports/rebirth-ui.module';

@NgModule({
  imports: [CommonModule, RebirthUIModule],
  exports: [InfiniteScrollDemoComponent],
  declarations: [InfiniteScrollDemoComponent],
  providers: [],
  entryComponents: [InfiniteScrollDemoComponent]
})
export class InfiniteScrollDemoModule {
}
