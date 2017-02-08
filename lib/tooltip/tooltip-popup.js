var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, HostListener } from '@angular/core';
var TooltipPopup = (function () {
    function TooltipPopup(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.placement = 'top';
    }
    TooltipPopup.prototype.onDocumentClick = function ($event) {
        $event.stopPropagation();
    };
    TooltipPopup.prototype.show = function () {
        this.isOpen = true;
        this.renderer.setElementClass(this.elementRef.nativeElement, TooltipPopup.ACTIVE_CLASS, true);
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'block');
        if (this.cssClass) {
            this.renderer.setElementClass(this.elementRef.nativeElement, this.cssClass, true);
        }
    };
    TooltipPopup.prototype.hide = function () {
        this.isOpen = false;
        this.renderer.setElementClass(this.elementRef.nativeElement, TooltipPopup.ACTIVE_CLASS, false);
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
        if (this.cssClass) {
            this.renderer.setElementClass(this.elementRef.nativeElement, this.cssClass, false);
        }
    };
    return TooltipPopup;
}());
export { TooltipPopup };
TooltipPopup.ACTIVE_CLASS = 'in';
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipPopup.prototype, "placement", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipPopup.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipPopup.prototype, "context", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipPopup.prototype, "cssClass", void 0);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], TooltipPopup.prototype, "onDocumentClick", null);
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/tooltip/tooltip-popup.js.map