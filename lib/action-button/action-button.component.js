var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, ChangeDetectionStrategy, HostListener, Output } from '@angular/core';
var ActionButtonComponent = (function () {
    function ActionButtonComponent() {
        this.type = 'primary';
        this.direction = 'down';
        this.isOpen = false;
        this.disabled = false;
        this.actionClick = new EventEmitter();
        this.openStatusChange = new EventEmitter();
    }
    ActionButtonComponent.prototype.toggle = function ($event) {
        if ($event) {
            $event.stopPropagation();
        }
        this.isOpen = !this.isOpen;
        this.openStatusChange.emit(this.isOpen);
    };
    ActionButtonComponent.prototype.close = function ($event) {
        this.isOpen = false;
        this.openStatusChange.emit(this.isOpen);
    };
    ActionButtonComponent.prototype.onActionClick = function (item) {
        this.close();
        this.actionClick.emit(item);
    };
    return ActionButtonComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], ActionButtonComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ActionButtonComponent.prototype, "direction", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ActionButtonComponent.prototype, "buttonText", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ActionButtonComponent.prototype, "isOpen", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], ActionButtonComponent.prototype, "actions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ActionButtonComponent.prototype, "disabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ActionButtonComponent.prototype, "actionClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ActionButtonComponent.prototype, "openStatusChange", void 0);
__decorate([
    HostListener('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], ActionButtonComponent.prototype, "close", null);
ActionButtonComponent = __decorate([
    Component({
        selector: 're-action-button',
        templateUrl: './action-button.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], ActionButtonComponent);
export { ActionButtonComponent };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/action-button/action-button.component.js.map