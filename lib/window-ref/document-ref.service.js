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
var DocumentRef = (function () {
    function DocumentRef() {
    }
    Object.defineProperty(DocumentRef.prototype, "body", {
        get: function () {
            return document.body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentRef.prototype, "documentElement", {
        get: function () {
            return document.documentElement;
        },
        enumerable: true,
        configurable: true
    });
    return DocumentRef;
}());
DocumentRef = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], DocumentRef);
export { DocumentRef };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/window-ref/document-ref.service.js.map