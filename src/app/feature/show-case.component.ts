import { Component, OnInit, Renderer2 } from '@angular/core';
import { DemoConfigService } from '../shared/demo/demo-config.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentRef } from '../exports';
import * as hljs from 'highlight.js';
import { Renderer3 } from '@angular/core/src/render3/interfaces/renderer';

@Component({
  selector: 're-show-case',
  templateUrl: './show-case.component.html'
})
export class ShowcaseComponent implements OnInit {
  components: any[];

  constructor(private demoConfigService: DemoConfigService,
              private domSanitizer: DomSanitizer,
              private documentRef: DocumentRef,
              private activatedRoute: ActivatedRoute,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.documentRef.body.scrollTop = 0;
      this.components = this.demoConfigService.components.filter(cmp => {
        return cmp.name === params.name;
      })
        .map((cmp) => {
          cmp.readMe = this.domSanitizer.bypassSecurityTrustHtml(cmp.readMe);
          cmp.ts = this.fixTSModuleImport(cmp.ts);
          return cmp;
        });
    });


  }

  private highlightBlock(code) {
    const elm = this.renderer.createElement('div');
    this.renderer.setProperty(elm,'innerHTML',code);
    hljs.highlightBlock(html.last.nativeElement);
  }

  private fixTSModuleImport(code): string {
    return (code || '').replace(/\.\.\/\.\.\/exports(\/.*)?/, 'rebirth-ng');
  }


}
