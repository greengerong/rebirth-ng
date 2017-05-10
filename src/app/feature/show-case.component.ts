import { Component, OnInit } from '@angular/core';
import { DemoConfigService } from '../shared/demo/demo-config.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 're-show-case',
  templateUrl: './show-case.component.html'
})
export class ShowcaseComponent implements OnInit {
  components: any[];

  constructor(private demoConfigService: DemoConfigService,
              private domSanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let component = this.demoConfigService.components.find(cmp => {
        return cmp.name === params['name'];
      });

      component.readMe = this.domSanitizer.bypassSecurityTrustHtml(component.readMe);
      component.ts = this.fixTSModuleImport(component.ts);
      this.components = [component];
    });


  }


  private fixTSModuleImport(code): string {
    return code.replace(/\.\.\/\.\.\/exports(\/.*)?/, 'rebirth-ng');
  }


}
