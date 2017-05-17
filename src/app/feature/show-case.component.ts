import { Component, OnInit } from '@angular/core';
import { DemoConfigService } from '../shared/demo/demo-config.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentRef } from '../exports';

@Component({
  selector: 're-show-case',
  templateUrl: './show-case.component.html'
})
export class ShowcaseComponent implements OnInit {
  components: any[];

  constructor(private demoConfigService: DemoConfigService,
              private domSanitizer: DomSanitizer,
              private documentRef: DocumentRef,
              private activatedRoute: ActivatedRoute) {
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


  private fixTSModuleImport(code): string {
    return code.replace(/\.\.\/\.\.\/exports(\/.*)?/, 'rebirth-ng');
  }


}
