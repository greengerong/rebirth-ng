import { DocumentRef } from './document-ref.service';
import { WindowRef } from './window-ref.service';
export * from './document-ref.service';
export * from './window-ref.service';
export var COMMON_SERVICES = [
    { provide: DocumentRef, useClass: DocumentRef },
    { provide: WindowRef, useClass: WindowRef }
];
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/window-ref/index.js.map