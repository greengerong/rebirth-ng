var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef, Injector, ChangeDetectionStrategy, ComponentFactoryResolver } from '@angular/core';
var ModalContentComponent = (function () {
    function ModalContentComponent(modalContentContainer, injector, componentFactoryResolver) {
        this.modalContentContainer = modalContentContainer;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ModalContentComponent.prototype.addContent = function (options, dismiss) {
        var componentFactoryResolver = options.componentFactoryResolver || this.componentFactoryResolver;
        var componentFactory = componentFactoryResolver.resolveComponentFactory(options.component);
        this.modalContentRef = this.modalContentContainer
            .createComponent(componentFactory, this.modalContentContainer.length, options.injector || this.injector);
        var instance = this.modalContentRef.instance;
        instance.dismiss = dismiss;
        this.handleResolve(options, instance);
    };
    ModalContentComponent.prototype.ngOnDestroy = function () {
        this.modalContentRef.destroy();
    };
    ModalContentComponent.prototype.handleResolve = function (options, instance) {
        var resolve = options.resolve || {};
        if (resolve.then) {
            resolve.then(function (data) { return instance.context = data; });
        }
        else if (resolve.subscribe) {
            resolve.subscribe(function (data) { return instance.context = data; });
        }
        else {
            instance.context = resolve;
        }
    };
    return ModalContentComponent;
}());
ModalContentComponent = __decorate([
    Component({
        selector: 're-modal-content',
        template: '',
        changeDetection: ChangeDetectionStrategy.OnPush,
        exportAs: 'modalContent'
    }),
    __metadata("design:paramtypes", [ViewContainerRef, Injector,
        ComponentFactoryResolver])
], ModalContentComponent);
export { ModalContentComponent };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/modal/modal-content.component.js.map