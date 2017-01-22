import { NgModule } from '@angular/core';

import { RatingDemoComponent } from './rating-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthUIModule } from '../../exports';

@NgModule({
  imports: [CommonModule, RebirthUIModule],
  exports: [RatingDemoComponent],
  declarations: [RatingDemoComponent],
  providers: [],
})
export class RatingDemoModule {
}
