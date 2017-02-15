import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OverlayService } from '../../exports/overlay/overlay.service';

@Component({
  selector: 're-overlay-demo',
  templateUrl: './overlay-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayDemoComponent implements OnInit {

  constructor(private  overlayService: OverlayService) {
  }

  ngOnInit() {
  }

  openOverlay() {
    this.overlayService.open({ html: `<div> <img width="200px" src="./assets/images/loading.gif"></div>` });
    setTimeout(() => this.overlayService.close(), 5 * 1000);
  }
}
