import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList, OnInit
} from '@angular/core';
import * as hljs from 'highlight.js';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 're-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss'],
})
export class DocComponent implements AfterViewInit,OnInit {


  @ViewChildren('html') html: QueryList<ElementRef>;
  @ViewChildren('typescript') typescript: QueryList<ElementRef>;
  @ViewChildren('data') data: QueryList<ElementRef>;
  apiHref: string | SafeUrl;
  @Input() component: any;

  constructor(private domSanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    const url = `/rebirth-ng/compodocs/modules/${this.component.name}Module.html`;
    this.apiHref = this.domSanitizer.bypassSecurityTrustResourceUrl(url)
  }

  activeTabChange(id) {
    if (id == 'html') {
      setTimeout(() => {
        hljs.highlightBlock(this.html.last.nativeElement);
      }, 0);
    }
  }

  ngAfterViewInit(): void {
    this.html.changes.subscribe((html) => {
      hljs.highlightBlock(html.last.nativeElement);
    });

    this.typescript.changes.subscribe((typescript) => {
      hljs.highlightBlock(typescript.last.nativeElement);
    });


    this.data.changes.subscribe((data) => {
      if (data.last) {
        hljs.highlightBlock(data.last.nativeElement);
      }
    });
  }

}
