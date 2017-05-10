import { Component, OnInit } from '@angular/core';
import { DemoConfigService } from '../shared/demo/demo-config.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 're-getting-started',
  templateUrl: './gettingStarted.component.html'
})
export class GettingStartedComponent implements OnInit {
  gettingStarted: any;

  constructor(private demoConfigService: DemoConfigService, private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.gettingStarted = this.domSanitizer.bypassSecurityTrustHtml(this.demoConfigService.gettingStarted.readMe);
  }

}
