import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../exports/dialog/dialog.service';

@Component({
  selector: 're-dialog-demo',
  templateUrl: './dialog-demo.component.html'
})
export class DialogDemoComponent {

  constructor(private dialogService: DialogService) {

  }

  alert() {
    this.dialogService.alert({
      title: 'I\'m a rebirth alert!',
      content: 'This is <strong>rebirth alert</strong> content.',
      yes: '确定',
      html: true
    })
      .subscribe(
        data => console.log('Rebirth alert get yes result:', data),
        error => console.error('Rebirth alert get no result:', error)
      );
  }
}
