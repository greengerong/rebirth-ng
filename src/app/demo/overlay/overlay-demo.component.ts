import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OverlayService } from 'rebirth-ng';

@Component({
  selector: 're-overlay-body-demo',
  template: `
    <div>
      <div class="overlay-demo-logo"></div>
      <div class="text-center">Rebirth NG overlay!</div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayBodyDemoComponent {

}

@Component({
  selector: 're-overlay-demo',
  templateUrl: './overlay-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayDemoComponent {

  constructor(private  overlayService: OverlayService) {
  }

  openOverlay() {
    this.overlayService.open({ html: `<div class="overlay-demo-logo"></div>` });
    setTimeout(() => this.overlayService.close(), 5 * 1000);
  }

  openComponentOverlay() {
    this.overlayService.open({ component: OverlayBodyDemoComponent });
    setTimeout(() => this.overlayService.close(), 5 * 1000);
  }
}

