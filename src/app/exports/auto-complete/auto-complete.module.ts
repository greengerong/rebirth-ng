import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteDirective } from './auto-complete.directive';
import { AutoCompletePopupComponent } from './auto-complete-popup.component';
import { HightlightComponent } from './hightlight.component';

@NgModule({
  imports: [CommonModule],
  exports: [AutoCompleteDirective, AutoCompletePopupComponent, HightlightComponent],
  declarations: [AutoCompleteDirective, AutoCompletePopupComponent, HightlightComponent],
  providers: [],
  entryComponents: [AutoCompletePopupComponent]
})
export class AutoCompleteModule {
}
