import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
  Renderer,
  HostListener
} from '@angular/core';
import { OverlayOptions } from './overlay-options.model';
import { WindowRef } from '../window-ref/window-ref.service';
import { OverlayContentComponent } from './overlay-content.component';
import { centerWindowPosition } from '../utils/dom-utils';

@Component({
  selector: 're-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayComponent implements OnInit {
  @Input() overlayOptions: OverlayOptions;
  @ViewChild('overlayBody') overlayBody: ElementRef;
  @ViewChild(OverlayContentComponent) overlayContent: OverlayContentComponent;

  constructor(private windowRef: WindowRef, private renderer: Renderer) {
  }

  ngOnInit() {
  }

  addContent(options: OverlayOptions) {
    this.overlayOptions = options;
    if (!this.overlayOptions.html && this.overlayOptions.component) {
      this.overlayContent.addContent(this.overlayOptions);
    }
    this.adjustOverlayPosition();
  }

  @HostListener('window:resize', [])
  onWinResize() {
    this.adjustOverlayPosition();
  }

  private adjustOverlayPosition() {
    setTimeout(() => {
      const pos = centerWindowPosition(this.overlayBody, this.windowRef);
      this.renderer.setElementStyle(this.overlayBody.nativeElement, 'top', `${pos.top}px`);
      this.renderer.setElementStyle(this.overlayBody.nativeElement, 'left', `${pos.left}px`);
    }, 0);
  }
}
