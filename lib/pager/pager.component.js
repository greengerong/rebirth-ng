var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { RebirthUIConfig } from '../rebirth-ui.config';
var PagerComponent = PagerComponent_1 = (function () {
    function PagerComponent(rebirthUIConfig) {
        this.rebirthUIConfig = rebirthUIConfig;
        this.total = 0;
        this.pageIndex = 1;
        this.pageIndexChange = new EventEmitter();
        this.disable = false;
        this.totalPage = 0;
        this.aligned = rebirthUIConfig.pager.aligned;
        this.pageSize = rebirthUIConfig.pager.pageSize;
        this.previousText = rebirthUIConfig.pager.button.previous;
        this.nextText = rebirthUIConfig.pager.button.next;
    }
    PagerComponent.prototype.prev = function () {
        if (this.hasPrev()) {
            this.onPageIndexChange(this.pageIndex - 1);
        }
    };
    PagerComponent.prototype.next = function () {
        if (this.hasNext()) {
            this.onPageIndexChange(this.pageIndex + 1);
        }
    };
    PagerComponent.prototype.onPageIndexChange = function (pageIndex) {
        if (this.pageIndex !== pageIndex) {
            this.pageIndexChange.emit(pageIndex);
        }
    };
    PagerComponent.prototype.hasPrev = function () {
        return this.pageIndex > 1;
    };
    PagerComponent.prototype.hasNext = function () {
        return this.pageIndex < this.totalPage;
    };
    PagerComponent.prototype.getTotalPage = function () {
        return Math.ceil(this.total / this.pageSize);
    };
    PagerComponent.prototype.ngOnChanges = function (changes) {
        var shouldUpdateRanges = PagerComponent_1.EFFECT_PAGE_RANGE_KEYS.some(function (key) { return !!changes[key]; });
        if (shouldUpdateRanges) {
            this.totalPage = this.getTotalPage();
            this.pageIndex = Math.max(Math.min(this.pageIndex, this.totalPage), 1);
        }
    };
    return PagerComponent;
}());
PagerComponent.EFFECT_PAGE_RANGE_KEYS = ['total', 'pageSize', 'pageIndex'];
__decorate([
    Input(),
    __metadata("design:type", Object)
], PagerComponent.prototype, "total", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PagerComponent.prototype, "pageSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PagerComponent.prototype, "pageIndex", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PagerComponent.prototype, "pageIndexChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PagerComponent.prototype, "aligned", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PagerComponent.prototype, "previousText", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PagerComponent.prototype, "nextText", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PagerComponent.prototype, "disable", void 0);
PagerComponent = PagerComponent_1 = __decorate([
    Component({
        selector: 're-pager',
        templateUrl: './re-pager.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [RebirthUIConfig])
], PagerComponent);
export { PagerComponent };
var PagerComponent_1;
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/pager/pager.component.js.map