import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ModalOptions } from './modal-options.model';

@Component({
  selector: 're-modal-backdrop',
  template: `<div class="modal-backdrop fade {{modalOptions?.backdropClass || ''}}" 
                [ngStyle]="{'z-index': 1040 + instanceCount * 10 +1}"
                 [ngClass]="{'in': isOpen}">
             </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalBackdropComponent {
  @Input() isOpen: boolean;
  @Input() modalOptions: ModalOptions;
  @Input() instanceCount = 0;
}
