import {
  Component, ChangeDetectionStrategy, Type, Input, AfterViewInit, ViewChild, ElementRef,
  Renderer, ViewChildren, QueryList
} from '@angular/core';
import * as hljs from 'highlight.js';
import { setTimeout } from 'timers';

@Component({
  selector: 're-doc',
  templateUrl: './doc.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocComponent implements AfterViewInit {

  @ViewChildren('html') html: QueryList<ElementRef>;
  @ViewChildren('typescript') typescript: QueryList<ElementRef>;

  @Input() component: { name: string, cmp: Type<any> };

  constructor(private  renderer: Renderer) {
  }

  activeTabChange(id) {

    setTimeout(() => {
      hljs.highlightBlock(this.html.last.nativeElement);
    }, 0);
  }

  ngAfterViewInit(): void {

    this.html.changes.subscribe((html) => {
      hljs.highlightBlock(html.last.nativeElement);
    });

    this.typescript.changes.subscribe((typescript) => {
      hljs.highlightBlock(typescript.last.nativeElement);
    });
  }
}
