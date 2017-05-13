import { Component, ChangeDetectorRef, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { AlertBoxModel } from '../../exports';

@Component({
  selector: 're-alert-box-demo',
  templateUrl: './alert-box-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AlertBoxDemoComponent implements OnInit {

  @ViewChild('alertTemplate') alertTemplate: TemplateRef<any>;
  closed = false;
  autoDisappear = false;
  alerts: AlertBoxModel[] = [
    {
      type: 'success',
      html: 'heelo message'
    },
    {
      type: 'info',
      html: '2222222222'
    }
  ];

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.alerts[1].template = this.alertTemplate;
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
