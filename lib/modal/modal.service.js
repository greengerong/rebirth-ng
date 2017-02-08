var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Injector, ComponentFactoryResolver } from '@angular/core';
import { ModalComponent } from './modal.component';
import { RebirthUIConfig } from '../rebirth-ui.config';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { _throw } from 'rxjs/observable/throw';
var ModalService = (function () {
    function ModalService(rebirthConfig, componentFactoryResolver, injector) {
        this.rebirthConfig = rebirthConfig;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.instances = [];
    }
    ModalService.prototype.open = function (options) {
        var _this = this;
        var rootContainer = options.rootContainer || this.rebirthConfig.rootContainer;
        if (!rootContainer) {
            throw new Error('Should setup ViewContainerRef on modal options or rebirth config service!');
        }
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
        var injector = options.injector || this.injector;
        var modalRef = rootContainer.createComponent(componentFactory, rootContainer.length, injector);
        this.instances.push(modalRef);
        var instance = modalRef.instance;
        var dismissResult = instance.addContent(options, this.instances.length)
            .do(function () { return _this.close(modalRef); })
            .catch(function (error) {
            _this.close(modalRef);
            return _throw(error);
        });
        instance.open();
        return dismissResult;
    };
    ModalService.prototype.closeAll = function () {
        var _this = this;
        this.instances.forEach(function (modalRef) { return _this.close(modalRef); });
    };
    ModalService.prototype.close = function (modalRef) {
        this.instances.splice(this.instances.indexOf(modalRef), 1);
        modalRef.instance.close();
        if (!this.instances.length) {
            modalRef.instance.cleanup();
        }
        modalRef.destroy();
    };
    return ModalService;
}());
ModalService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [RebirthUIConfig, ComponentFactoryResolver,
        Injector])
], ModalService);
export { ModalService };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/modal/modal.service.js.map