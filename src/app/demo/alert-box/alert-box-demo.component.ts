import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 're-alert-box-demo',
  templateUrl: './alert-box-demo.component.html'
})
export class AlertBoxDemoComponent {
  closed = false;
  autoDisappear = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  close() {
    console.log('close');
    this.closed = true;
  }

  autoDisappearChange() {
    this.closed = false;
    if (this.autoDisappear) {
      setTimeout(() => {
        this.autoDisappear = false;
        this.close();
        this.changeDetectorRef.markForCheck();
      }, 2 * 1000);
    }
  }
}
