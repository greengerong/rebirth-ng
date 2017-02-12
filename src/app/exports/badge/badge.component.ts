import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-badge',
  templateUrl: './badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {
  @Input() cssClass: string;
  @Input() text: string;
}
