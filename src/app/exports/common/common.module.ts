import { NgModule } from '@angular/core';

import { AutoFocusDirective } from './auto-focus.directive';
import { CommonModule } from '@angular/common';
import { TemplateLoaderComponent } from './template-loader.component';
import { TrustHtmlPipe } from './trust-html.pipe';
import { ResizeableDirective } from './resizeable.directive';
import { DropdownDirective } from './dropdown.directive';
import { DatePipe } from './date.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [
    AutoFocusDirective,
    TemplateLoaderComponent,
    TrustHtmlPipe,
    ResizeableDirective,
    DropdownDirective,
    DatePipe
  ],
  declarations: [
    AutoFocusDirective,
    TemplateLoaderComponent,
    TrustHtmlPipe,
    ResizeableDirective,
    DropdownDirective,
    DatePipe
  ],
  providers: [],
})
export class RebirthCommonModule {
}
