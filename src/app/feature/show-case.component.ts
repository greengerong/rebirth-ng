import { Component, OnInit, Renderer2 } from '@angular/core';
import { DemoConfigService } from '../shared/demo/demo-config.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentRef } from 'rebirth-ng';
import { fixTSModuleImport, highlightCodeBlock } from '../shared/doc/hightlight';

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
          cmp.html = highlightCodeBlock(this.renderer, cmp.html);
          cmp.ts = highlightCodeBlock(this.renderer, fixTSModuleImport(cmp.ts));
          cmp.readMe = this.domSanitizer.bypassSecurityTrustHtml(cmp.readMe);
          const dataJson = cmp.data ? JSON.stringify(cmp.data, null, 2) : '';
          cmp.data = highlightCodeBlock(this.renderer, dataJson);
          return cmp;
        });
    });


  }
}
