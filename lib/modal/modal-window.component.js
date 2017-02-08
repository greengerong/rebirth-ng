var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild, HostListener, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { ModalContentComponent } from './modal-content.component';
import { ModalDismissReasons } from './modal-dismiss-reasons.model';
var ModalWindowComponent = (function () {
    function ModalWindowComponent(elementRef) {
        this.elementRef = elementRef;
        this.isOpen = false;
        this.instanceCount = 0;
    }
    ModalWindowComponent.prototype.onBackdropClick = function ($event) {
        if (!this.modalOptions.modal && this.elementRef.nativeElement === $event.target) {
            this.dismiss.error(ModalDismissReasons.BACKDROP_CLICK);
        }
    };
    ModalWindowComponent.prototype.onEscKeyUp = function ($event) {
        if (this.modalOptions.keyboard !== false) {
            this.dismiss.error(ModalDismissReasons.ESC_KEY);
        }
    };
    ModalWindowComponent.prototype.addContent = function (options, dismiss) {
        this.modalOptions = options;
        this.dismiss = dismiss;
        this.modalContent.addContent(options, this.dismiss);
        return this.dismiss;
    };
    return ModalWindowComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ModalWindowComponent.prototype, "isOpen", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalWindowComponent.prototype, "instanceCount", void 0);
__decorate([
    ViewChild(ModalContentComponent),
    __metadata("design:type", ModalContentComponent)
], ModalWindowComponent.prototype, "modalContent", void 0);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], ModalWindowComponent.prototype, "onBackdropClick", null);
__decorate([
    HostListener('keyup.esc', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], ModalWindowComponent.prototype, "onEscKeyUp", null);
ModalWindowComponent = __decorate([
    Component({
        selector: 're-modal-window',
        templateUrl: './modal-window.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ElementRef])
], ModalWindowComponent);
export { ModalWindowComponent };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/modal/modal-window.component.js.map