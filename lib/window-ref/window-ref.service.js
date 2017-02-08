var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { DocumentRef } from './document-ref.service';
var WindowRef = (function () {
    function WindowRef(documentRef) {
        this.documentRef = documentRef;
    }
    Object.defineProperty(WindowRef.prototype, "document", {
        get: function () {
            return this.documentRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowRef.prototype, "pageXOffset", {
        get: function () {
            return window.pageXOffset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowRef.prototype, "pageYOffset", {
        get: function () {
            return window.pageYOffset;
        },
        enumerable: true,
        configurable: true
    });
    WindowRef.prototype.getComputedStyle = function (element) {
        return window.getComputedStyle(element);
    };
    return WindowRef;
}());
WindowRef = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [DocumentRef])
], WindowRef);
export { WindowRef };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/window-ref/window-ref.service.js.map