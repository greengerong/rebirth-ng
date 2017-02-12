import { NgModule } from '@angular/core';

import { RatingDemoComponent } from './rating-demo.component';
import { CommonModule } from '@angular/common';
import { RebirthUIModule } from '../../exports';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, RebirthUIModule],
  exports: [RatingDemoComponent],
  declarations: [RatingDemoComponent],
  providers: [],
  entryComponents: [RatingDemoComponent]
})
export class RatingDemoModule {
}
