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
import { Directive, Input, ViewContainerRef, ComponentFactoryResolver, Injector, ElementRef, Renderer } from '@angular/core';
import { PositionService } from '../position/positioning.service';
import { Tooltip } from './tooltip';
import { TooltipPopupComponent } from './tooltip-popup.component';
var TooltipDirective = (function (_super) {
    __extends(TooltipDirective, _super);
    function TooltipDirective(viewContainerRef, elementRef, componentFactoryResolver, injector, positionService, renderer) {
        var _this = _super.call(this, viewContainerRef, elementRef, componentFactoryResolver, injector, positionService, renderer) || this;
        _this.tooltipPopupType = TooltipPopupComponent;
        return _this;
    }
    TooltipDirective.prototype.getContent = function () {
        return this.content;
    };
    return TooltipDirective;
}(Tooltip));
__decorate([
    Input('reTooltip'),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "content", void 0);
TooltipDirective = __decorate([
    Directive({
        selector: '[reTooltip]',
        exportAs: 'tooltip'
    }),
    __metadata("design:paramtypes", [ViewContainerRef,
        ElementRef,
        ComponentFactoryResolver,
        Injector,
        PositionService,
        Renderer])
], TooltipDirective);
export { TooltipDirective };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/tooltip/tooltip.directive.js.map