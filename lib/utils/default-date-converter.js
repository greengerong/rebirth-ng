import { formatDate, parseDate } from './date-utils';
var DefaultDateConverter = (function () {
    function DefaultDateConverter() {
    }
    DefaultDateConverter.prototype.parse = function (date, pattern, locale) {
        return parseDate(date);
    };
    DefaultDateConverter.prototype.format = function (date, pattern, locale) {
        return formatDate(date, pattern);
    };
    return DefaultDateConverter;
}());
export { DefaultDateConverter };
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/utils/default-date-converter.js.map