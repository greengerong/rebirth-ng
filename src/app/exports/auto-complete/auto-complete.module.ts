import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteDirective } from './auto-complete.directive';
import { AutoCompletePopupComponent } from './auto-complete-popup.component';

@NgModule({
  imports: [CommonModule],
  exports: [AutoCompleteDirective, AutoCompletePopupComponent],
  declarations: [AutoCompleteDirective, AutoCompletePopupComponent],
  providers: [],
  entryComponents: [AutoCompletePopupComponent]
})
export class AutoCompleteModule {
}
