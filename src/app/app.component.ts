import { Component, ViewContainerRef } from '@angular/core';
import { RebirthUIConfig } from './exports/rebirth-ui.config';

@Component({
  selector: 're-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private rebirthConfig: RebirthUIConfig, private viewContainerRef: ViewContainerRef) {
    this.rebirthConfig.rootContainer = this.viewContainerRef;
  }


}
