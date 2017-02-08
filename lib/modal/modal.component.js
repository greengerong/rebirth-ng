var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild, EventEmitter, Output, ChangeDetectionStrategy, Renderer } from '@angular/core';
import { ModalWindowComponent } from './modal-window.component';
import { DocumentRef } from '../window-ref';
var ModalComponent = ModalComponent_1 = (function () {
    function ModalComponent(renderer, documentRef) {
        this.renderer = renderer;
        this.documentRef = documentRef;
        this.isOpen = false;
        this.dismiss = new EventEmitter();
        this.instanceCount = 0;
    }
    ModalComponent.prototype.open = function () {
        this.isOpen = true;
        this.modalWindowComponent.isOpen = true;
        this.toggleBodyClass(true);
    };
    ModalComponent.prototype.close = function () {
        this.isOpen = false;
    };
    ModalComponent.prototype.cleanup = function () {
        this.toggleBodyClass(false);
    };
    ModalComponent.prototype.addContent = function (options, instanceCount) {
        this.modalOptions = options;
        this.instanceCount = instanceCount;
        this.modalWindowComponent.addContent(options, this.dismiss);
        return this.dismiss;
    };
    ModalComponent.prototype.toggleBodyClass = function (isAdd) {
        this.renderer.setElementClass(this.documentRef.body, ModalComponent_1.MODEL_OPEN_CSS, isAdd);
    };
    return ModalComponent;
}());
ModalComponent.MODEL_OPEN_CSS = 'modal-open';
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ModalComponent.prototype, "isOpen", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "dismiss", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "modalOptions", void 0);
__decorate([
    ViewChild(ModalWindowComponent),
    __metadata("design:type", ModalWindowComponent)
], ModalComponent.prototype, "modalWindowComponent", void 0);
ModalComponent = ModalComponent_1 = __decorate([
    Component({
        selector: 're-modal',
        templateUrl: './modal.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [Renderer, DocumentRef])
], ModalComponent);
export { ModalComponent };
var ModalComponent_1;
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/modal/modal.component.js.map