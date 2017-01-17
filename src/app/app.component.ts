import { Component, ViewContainerRef } from '@angular/core';
import { RebirthConfig } from './exports/rebirth-ui.config';

@Component({
  selector: 're-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private rebirthConfig: RebirthConfig, private viewContainerRef: ViewContainerRef) {
    this.rebirthConfig.rootContainer = this.viewContainerRef;
  }


}
