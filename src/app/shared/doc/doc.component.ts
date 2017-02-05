import { Component, ChangeDetectionStrategy, Type, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
  selector: 're-doc',
  templateUrl: './doc.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocComponent implements AfterViewInit {

  @ViewChild('html') html: ElementRef;
  @ViewChild('typescript') typescript: ElementRef;

  @Input() component: { name: string, cmp: Type<any> };

  constructor() {
  }

  activeTabChange(id) {
    setTimeout(() => {
      if (id === 'html') {
        hljs.highlightBlock(this.html.nativeElement);
        return;
      }
      hljs.highlightBlock(this.typescript.nativeElement);
    });
  }

  ngAfterViewInit(): void {

    // hljs.highlightBlock(this.typescript.nativeElement);
  }
}
