import { EventEmitter } from '@angular/core';

export interface Modal {
  context: any;
  dismiss: EventEmitter<any>;
}
