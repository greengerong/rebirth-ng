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
var PaginationComponent = PaginationComponent_1 = (function () {
    function PaginationComponent(rebirthUIConfig) {
        this.rebirthUIConfig = rebirthUIConfig;
        this.total = 0;
        this.pageIndex = 1;
        this.pageIndexChange = new EventEmitter();
        this.showPages = [];
        this.totalPage = 0;
        this.boundary = rebirthUIConfig.pagination.boundary;
        this.pageSize = rebirthUIConfig.pagination.pageSize;
        this.maxItems = rebirthUIConfig.pagination.maxItems;
        this.firstLink = rebirthUIConfig.pagination.button.first;
        this.lastLink = rebirthUIConfig.pagination.button.last;
        this.preLink = rebirthUIConfig.pagination.button.pre;
        this.nextLink = rebirthUIConfig.pagination.button.next;
        this.size = rebirthUIConfig.pagination.size;
    }
    PaginationComponent.prototype.first = function () {
        if (this.pageIndex !== 1) {
            this.onPageIndexChange(1);
        }
    };
    PaginationComponent.prototype.last = function () {
        var last = Math.max(this.totalPage, 1);
        if (this.pageIndex !== last) {
            this.onPageIndexChange(last);
        }
    };
    PaginationComponent.prototype.prev = function () {
        if (this.hasPrev()) {
            this.onPageIndexChange(this.pageIndex - 1);
        }
    };
    PaginationComponent.prototype.next = function () {
        if (this.hasNext()) {
            this.onPageIndexChange(this.pageIndex + 1);
        }
    };
    PaginationComponent.prototype.preRange = function () {
        var pre = this.showPages[0] - 1;
        this.onPageIndexChange(Math.max(pre, 1));
    };
    PaginationComponent.prototype.nextRange = function () {
        var next = this.showPages[this.showPages.length - 1] + 1;
        this.onPageIndexChange(Math.min(next, this.totalPage));
    };
    PaginationComponent.prototype.onPageIndexChange = function (pageIndex) {
        if (this.pageIndex !== pageIndex) {
            this.pageIndexChange.emit(pageIndex);
        }
    };
    PaginationComponent.prototype.hasPrev = function () {
        return this.pageIndex > 1;
    };
    PaginationComponent.prototype.hasNext = function () {
        return this.pageIndex < this.totalPage;
    };
    PaginationComponent.prototype.getTotalPage = function () {
        return Math.ceil(this.total / this.pageSize);
    };
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        var shouldUpdateRanges = PaginationComponent_1.EFFECT_PAGE_RANGE_KEYS.some(function (key) { return !!changes[key]; });
        if (shouldUpdateRanges) {
            this.totalPage = this.getTotalPage();
            this.pageIndex = Math.max(Math.min(this.pageIndex, this.totalPage), 1);
            this.updateShowPageRange();
        }
    };
    PaginationComponent.prototype.updateShowPageRange = function () {
        if (!this.totalPage) {
            this.showPages = [];
            return;
        }
        if (this.totalPage <= this.maxItems) {
            this.showPages = new Array(this.totalPage).fill(0).map(function (_, i) { return i + 1; });
            return;
        }
        this.showPages = this.extractRange();
    };
    PaginationComponent.prototype.extractRange = function () {
        var _this = this;
        var showPages = [this.pageIndex];
        var start = this.pageIndex - 1;
        var end = this.pageIndex + 1;
        var arriveLeftBound = function (index) { return index < 1; };
        var arriveRightBound = function (index) { return index > _this.totalPage; };
        var fullPageRang = function (pages) { return pages.length >= _this.maxItems; };
        while (!(fullPageRang(showPages) || (arriveLeftBound(start) && arriveRightBound(end)))) {
            if (!arriveLeftBound(start)) {
                showPages.unshift((start--));
            }
            if (!fullPageRang(showPages) && !arriveRightBound(end)) {
                showPages.push(end++);
            }
        }
        return showPages;
    };
    return PaginationComponent;
}());
PaginationComponent.EFFECT_PAGE_RANGE_KEYS = ['total', 'pageSize', 'pageIndex', 'maxItems'];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PaginationComponent.prototype, "boundary", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "total", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "pageSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "pageIndex", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "pageIndexChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "maxItems", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PaginationComponent.prototype, "firstLink", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PaginationComponent.prototype, "lastLink", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PaginationComponent.prototype, "preLink", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PaginationComponent.prototype, "nextLink", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PaginationComponent.prototype, "size", void 0);
PaginationComponent = PaginationComponent_1 = __decorate([
    Component({
        selector: 're-pagination',
        templateUrl: './pagination.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [RebirthUIConfig])
], PaginationComponent);
export { PaginationComponent };
var PaginationComponent_1;
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/pagination/pagination.component.js.map