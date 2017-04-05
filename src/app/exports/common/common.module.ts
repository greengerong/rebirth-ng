import { NgModule } from '@angular/core';

import { AutoFocusDirective } from './auto-focus.directive';
import { CommonModule } from '@angular/common';
import { TemplateLoaderComponent } from './template-loader.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    AutoFocusDirective,
    TemplateLoaderComponent
  ],
  declarations: [
    AutoFocusDirective,
    TemplateLoaderComponent
  ],
  providers: [],
})
export class RebirthCommonModule {
}
