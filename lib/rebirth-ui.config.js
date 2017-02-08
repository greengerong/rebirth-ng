var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
var RebirthUIConfig = (function () {
    function RebirthUIConfig(locale) {
        this.locale = locale;
        this.accordion = {
            type: '',
            keepOneItem: true,
            closable: false
        };
        this.alertBox = {
            type: 'info',
            closable: false,
        };
        this.datePicker = {
            locale: 'en-US',
            timePicker: false,
            dateConverter: null,
            weeks: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            min: 1900,
            max: 2099,
            format: {
                date: 'YYYY-MM-DD',
                time: 'YYYY-MM-DD HH:mm'
            }
        };
        this.dialog = {
            button: {
                yes: 'Yes',
                no: 'No'
            }
        };
        this.pager = {
            pageSize: 10,
            aligned: true,
            button: {
                previous: '« Previous',
                next: 'Next »'
            }
        };
        this.pagination = {
            boundary: true,
            pageSize: 10,
            maxItems: 10,
            size: '',
            button: {
                first: 'First',
                last: 'Last',
                pre: 'Previous',
                next: 'Next'
            }
        };
        this.panel = {
            type: 'default',
            closable: false,
            collapsable: false,
        };
        this.rating = {
            max: 10,
            icons: { stateOn: 'glyphicon glyphicon-star', stateOff: 'glyphicon glyphicon-star-empty' }
        };
        this.tabs = {
            type: 'tabs',
            justified: false,
            vertical: false
        };
    }
    return RebirthUIConfig;
}());
RebirthUIConfig = __decorate([
    Injectable(),
    __param(0, Inject(LOCALE_ID)),
    __metadata("design:paramtypes", [String])
], RebirthUIConfig);
export { RebirthUIConfig };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/rebirth-ui.config.js.map