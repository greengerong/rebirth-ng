import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-modal-backdrop',
  template: `<div class="modal-backdrop fade {{backdropClass}}" 
                [ngStyle]="{'z-index': 1040 + instanceCount *10 +1}"
                 [ngClass]="{'in': isOpen}">
             </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalBackdropComponent {
  @Input() isOpen: boolean;
  @Input() backdropClass: string;
  @Input() instanceCount = 0;
}
