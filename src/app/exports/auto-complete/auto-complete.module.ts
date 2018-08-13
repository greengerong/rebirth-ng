import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteDirective } from './auto-complete.directive';
import { AutoCompletePopupComponent } from './auto-complete-popup.component';
import { HightlightComponent } from './hightlight.component';
import { MutipleAutoCompleteComponent } from './mutiple-auto-complete.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [AutoCompleteDirective, AutoCompletePopupComponent, HightlightComponent, MutipleAutoCompleteComponent],
  declarations: [AutoCompleteDirective, AutoCompletePopupComponent, HightlightComponent, MutipleAutoCompleteComponent],
  providers: [],
  entryComponents: [AutoCompletePopupComponent]
})
export class AutoCompleteModule {
}
