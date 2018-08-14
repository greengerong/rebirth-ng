import { NgModule } from '@angular/core';

import { InfiniteScrollDemoComponent } from './infinite-scroll-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  imports: [CommonModule, RebirthNGModule],
  exports: [InfiniteScrollDemoComponent],
  declarations: [InfiniteScrollDemoComponent],
  providers: [],
  entryComponents: [InfiniteScrollDemoComponent]
})
export class InfiniteScrollDemoModule {
}
