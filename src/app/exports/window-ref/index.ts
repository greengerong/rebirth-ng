import { Type } from '@angular/core';
import { DocumentRef } from './document-ref.service';
import { WindowRef } from './window-ref.service';

export * from './document-ref.service';
export * from './window-ref.service';

export const COMMON_SERVICES: Type<any>[] = [DocumentRef, WindowRef];

