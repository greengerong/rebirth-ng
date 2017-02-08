var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { PanelComponent } from './panel.component';
import { CommonModule } from '@angular/common';
import { PanelHeaderComponent } from './panel-header.component';
import { PanelBodyComponent } from './panel-body.component';
var PanelModule = (function () {
    function PanelModule() {
    }
    return PanelModule;
}());
PanelModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        exports: [
            PanelComponent,
            PanelHeaderComponent,
            PanelBodyComponent
        ],
        declarations: [
            PanelComponent,
            PanelHeaderComponent,
            PanelBodyComponent
        ],
        providers: [],
    })
], PanelModule);
export { PanelModule };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/panel/panel.module.js.map