import { NgModule } from '@angular/core';

import { AutoFocusDirective } from './auto-focus.directive';
import { CommonModule } from '@angular/common';
import { TemplateLoaderComponent } from './template-loader.component';
import { TrustHtmlPipe } from './trust-html.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [
    AutoFocusDirective,
    TemplateLoaderComponent,
    TrustHtmlPipe
  ],
  declarations: [
    AutoFocusDirective,
    TemplateLoaderComponent,
    TrustHtmlPipe
  ],
  providers: [],
})
export class RebirthCommonModule {
}
