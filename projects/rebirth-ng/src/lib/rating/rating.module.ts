import { NgModule } from '@angular/core';

import { RatingComponent } from './rating.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [RatingComponent],
  declarations: [RatingComponent],
  providers: [],
})
export class RatingModule {
}
