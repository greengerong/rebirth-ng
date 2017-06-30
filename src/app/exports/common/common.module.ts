import { NgModule } from '@angular/core';

import { AutoFocusDirective } from './auto-focus.directive';
import { CommonModule } from '@angular/common';
import { TemplateLoaderComponent } from './template-loader.component';
import { TrustHtmlPipe } from './trust-html.pipe';
import { ResizeableDirective } from './resizeable.directive';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  imports: [CommonModule],
  exports: [
    AutoFocusDirective,
    TemplateLoaderComponent,
    TrustHtmlPipe,
    ResizeableDirective,
    DropdownDirective
  ],
  declarations: [
    AutoFocusDirective,
    TemplateLoaderComponent,
    TrustHtmlPipe,
    ResizeableDirective,
    DropdownDirective
  ],
  providers: [],
})
export class RebirthCommonModule {
}
