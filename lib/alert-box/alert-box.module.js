var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { AlertBoxComponent } from './alert-box.component';
import { CommonModule } from '@angular/common';
var AlertBoxModule = (function () {
    function AlertBoxModule() {
    }
    return AlertBoxModule;
}());
AlertBoxModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        providers: [],
        declarations: [
            AlertBoxComponent
        ],
        exports: [
            AlertBoxComponent
        ],
    })
], AlertBoxModule);
export { AlertBoxModule };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/alert-box/alert-box.module.js.map