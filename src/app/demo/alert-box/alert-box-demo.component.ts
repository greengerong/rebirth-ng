import { Component, ChangeDetectorRef, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { AlertBoxModel, AlertBoxService } from '../../exports';

@Component({
  selector: 're-alert-box-demo',
  templateUrl: './alert-box-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AlertBoxDemoComponent implements OnInit {

  @ViewChild('alertTemplate') alertTemplate: TemplateRef<any>;
  closed = false;
  autoDisappear = false;
  alertIndex = 0;
  alerts: AlertBoxModel[] = [
    {
      type: 'success',
      html: 'Save order success!'
    },
    {
      type: 'danger',
      html: 'Get error: babababababa!'
    }
  ];

  constructor(private changeDetectorRef: ChangeDetectorRef, private alertBoxService: AlertBoxService) {
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

  placementChange(placement) {
    this.alertBoxService.placement(placement);
  }

  showAlertMessage() {
    const index = this.alertIndex++ % 2;
    this.alertBoxService.show({ ...this.alerts[index] }, index === 1 ? 2 * 1000 : 0);
  }
}
