import { NgModule } from '@angular/core';

import { InfiniteScrollComponent } from './infinite-scroll.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [InfiniteScrollComponent],
  declarations: [InfiniteScrollComponent],
  providers: [],
})
export class InfiniteScrollModule {
}
