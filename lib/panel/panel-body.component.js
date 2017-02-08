var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
var PanelBodyComponent = (function () {
    function PanelBodyComponent() {
    }
    return PanelBodyComponent;
}());
PanelBodyComponent = __decorate([
    Component({
        selector: 're-panel-body,[re-panel-body],re-accordion-body,[re-accordion-body]',
        template: '<ng-content></ng-content>',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PanelBodyComponent);
export { PanelBodyComponent };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/panel/panel-body.component.js.map