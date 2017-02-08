var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, ViewContainerRef, ElementRef, ComponentFactoryResolver, Injector, Renderer } from '@angular/core';
import { PopoverPopupComponent } from './popover-popup.component';
import { PositionService } from '../position/positioning.service';
import { Tooltip } from '../tooltip/tooltip';
var PopoverDirective = (function (_super) {
    __extends(PopoverDirective, _super);
    function PopoverDirective(viewContainerRef, elementRef, componentFactoryResolver, injector, positionService, renderer) {
        var _this = _super.call(this, viewContainerRef, elementRef, componentFactoryResolver, injector, positionService, renderer) || this;
        _this.tooltipPopupType = PopoverPopupComponent;
        _this.trigger = 'click';
        return _this;
    }
    PopoverDirective.prototype.fillPopup = function () {
        var popupComponent = _super.prototype.fillPopup.call(this);
        popupComponent.title = this.title;
        return popupComponent;
    };
    PopoverDirective.prototype.getContent = function () {
        return this.content;
    };
    return PopoverDirective;
}(Tooltip));
__decorate([
    Input('reTitle'),
    __metadata("design:type", Object)
], PopoverDirective.prototype, "title", void 0);
__decorate([
    Input('rePopover'),
    __metadata("design:type", Object)
], PopoverDirective.prototype, "content", void 0);
PopoverDirective = __decorate([
    Directive({
        selector: '[rePopover]',
        exportAs: 'popover'
    }),
    __metadata("design:paramtypes", [ViewContainerRef,
        ElementRef,
        ComponentFactoryResolver,
        Injector,
        PositionService,
        Renderer])
], PopoverDirective);
export { PopoverDirective };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/popover/popover.directive.js.map