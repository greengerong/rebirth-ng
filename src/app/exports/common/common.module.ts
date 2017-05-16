import { NgModule } from '@angular/core';

import { AutoFocusDirective } from './auto-focus.directive';
import { CommonModule } from '@angular/common';
import { TemplateLoaderComponent } from './template-loader.component';
import { TrustHtmlPipe } from './trust-html.pipe';
import { ResizeableDirective } from './resizeable.directive';

@NgModule({
  imports: [CommonModule],
  exports: [
    AutoFocusDirective,
    TemplateLoaderComponent,
    TrustHtmlPipe,
    ResizeableDirective
  ],
  declarations: [
    AutoFocusDirective,
    TemplateLoaderComponent,
    TrustHtmlPipe,
    ResizeableDirective
  ],
  providers: [],
})
export class RebirthCommonModule {
}
