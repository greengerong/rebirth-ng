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
var Tooltip = (function () {
    function Tooltip(viewContainerRef, elementRef, componentFactoryResolver, injector, positionService, renderer) {
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.positionService = positionService;
        this.renderer = renderer;
        this.trigger = 'hover';
        this.placement = 'top';
        this.triggers = {
            hover: ['mouseenter', 'mouseleave'],
            focus: ['focusin', 'focusout'],
            click: ['click'],
            manual: []
        };
        this.listens = [];
    }
    Tooltip.prototype.ngOnInit = function () {
        var factory = this.componentFactoryResolver.resolveComponentFactory(this.tooltipPopupType);
        this.popupRef = this.viewContainerRef.createComponent(factory, 0, this.injector);
        this.fillPopup();
        this.registerTriggers();
    };
    Tooltip.prototype.onDocumentClick = function ($event) {
        if (this.trigger !== 'manual') {
            var hostElement = this.elementRef.nativeElement;
            if ($event.target !== hostElement) {
                this.hide();
            }
        }
    };
    Tooltip.prototype.ngOnDestroy = function () {
        this.listens.forEach(function (unregister) { return unregister(); });
    };
    Tooltip.prototype.toggle = function () {
        if (this.popupRef.instance.isOpen) {
            return this.hide();
        }
        this.show();
    };
    Tooltip.prototype.show = function () {
        this.fillPopup();
        this.popupRef.instance.show();
        this.positionTooltip();
    };
    Tooltip.prototype.hide = function () {
        if (this.popupRef) {
            var popupComponent = this.popupRef.instance;
            popupComponent.hide();
        }
    };
    Tooltip.prototype.registerTriggers = function () {
        var _this = this;
        var hostElement = this.elementRef.nativeElement;
        var trigger = this.triggers[this.trigger];
        if (trigger[0]) {
            this.listens.push(this.renderer.listen(hostElement, trigger[0], function () { return _this.show(); }));
        }
        if (trigger[1]) {
            this.listens.push(this.renderer.listen(hostElement, trigger[1], function () { return _this.hide(); }));
        }
    };
    Tooltip.prototype.positionTooltip = function () {
        var hostElement = this.elementRef.nativeElement;
        var targetElement = this.popupRef.location.nativeElement;
        var clientRect = this.positionService.positionElements(hostElement, targetElement, this.placement, false);
        this.renderer.setElementStyle(targetElement, 'left', clientRect.left + "px");
        this.renderer.setElementStyle(targetElement, 'top', clientRect.top + "px");
    };
    Tooltip.prototype.fillPopup = function () {
        var popupComponent = this.popupRef.instance;
        popupComponent.content = this.getContent();
        popupComponent.cssClass = this.cssClass;
        popupComponent.context = this.context || {};
        popupComponent.placement = this.placement;
        return popupComponent;
    };
    return Tooltip;
}());
export { Tooltip };
__decorate([
    Input(),
    __metadata("design:type", Object)
], Tooltip.prototype, "context", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Tooltip.prototype, "cssClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Tooltip.prototype, "trigger", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Tooltip.prototype, "placement", void 0);
__decorate([
    HostListener('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], Tooltip.prototype, "onDocumentClick", null);
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/tooltip/tooltip.js.map