var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { RebirthUIConfig } from '../rebirth-ui.config';
var AlertBoxComponent = (function () {
    function AlertBoxComponent(rebirthUIConfig) {
        this.rebirthUIConfig = rebirthUIConfig;
        this.close = new EventEmitter();
        this.type = rebirthUIConfig.alertBox.type;
        this.closable = rebirthUIConfig.alertBox.closable;
    }
    Object.defineProperty(AlertBoxComponent.prototype, "disappearTime", {
        set: function (time) {
            var _this = this;
            if (time) {
                setTimeout(function () { return _this.onCloseBox(); }, time);
            }
        },
        enumerable: true,
        configurable: true
    });
    AlertBoxComponent.prototype.closeBox = function () {
        this.onCloseBox();
    };
    AlertBoxComponent.prototype.onCloseBox = function () {
        this.close.emit(this);
    };
    return AlertBoxComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], AlertBoxComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AlertBoxComponent.prototype, "closable", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], AlertBoxComponent.prototype, "close", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], AlertBoxComponent.prototype, "disappearTime", null);
AlertBoxComponent = __decorate([
    Component({
        selector: 're-alert-box',
        templateUrl: 'alert-box.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [RebirthUIConfig])
], AlertBoxComponent);
export { AlertBoxComponent };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/alert-box/alert-box.component.js.map