var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModalDismissReasons } from '../modal';
import { RebirthUIConfig } from '../rebirth-ui.config';
var AlertDialogComponent = (function () {
    function AlertDialogComponent(rebirthUIConfig) {
        this.rebirthUIConfig = rebirthUIConfig;
        this.btnYes = rebirthUIConfig.dialog.button.yes;
    }
    AlertDialogComponent.prototype.yes = function () {
        this.dismiss.emit(ModalDismissReasons.YES);
    };
    AlertDialogComponent.prototype.no = function () {
        this.dismiss.error(ModalDismissReasons.NO);
    };
    return AlertDialogComponent;
}());
AlertDialogComponent = __decorate([
    Component({
        selector: 're-alert-dialog',
        templateUrl: './alert-dialog.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [RebirthUIConfig])
], AlertDialogComponent);
export { AlertDialogComponent };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/dialog/alert-dialog.component.js.map