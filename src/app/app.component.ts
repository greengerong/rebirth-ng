import { Component, OnInit, Type, ViewContainerRef } from '@angular/core';
import { RebirthUIConfig } from './exports/rebirth-ui.config';
import { DemoConfigService } from './shared/demo/demo-config.service';

@Component({
  selector: 're-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  components: { name: string, cmp: Type<any> }[];

  constructor(private rebirthConfig: RebirthUIConfig,
              private viewContainerRef: ViewContainerRef,
              private demoConfigService: DemoConfigService) {
    this.rebirthConfig.rootContainer = this.viewContainerRef;
  }

  ngOnInit(): void {

    this.components = this.demoConfigService.components
      .sort((a, b) => a.name.localeCompare(b.name));
  }

}
