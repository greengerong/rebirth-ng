import { NgModule } from '@angular/core';

import { RatingDemoComponent } from './rating-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthNGModule } from 'rebirth-ng';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, RebirthNGModule],
  exports: [RatingDemoComponent],
  declarations: [RatingDemoComponent],
  providers: [],
  entryComponents: [RatingDemoComponent]
})
export class RatingDemoModule {
}
