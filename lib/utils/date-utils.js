import * as isDate from 'date-fns/is_date';
import * as dateParse from 'date-fns/parse';
import * as dateFormat from 'date-fns/format';
export function isValidDate(date) {
    return isDate(date) && !isNaN(date.getTime());
}
export function parseDate(date) {
    if (!date) {
        return null;
    }
    if (isDate(date)) {
        return date;
    }
    var parseDate = dateParse(date);
    return isValidDate(parseDate) ? parseDate : null;
}
export function formatDate(date, pattern) {
    if (pattern === void 0) { pattern = 'YYYY-MM-DD HH:mm:ss'; }
    return isValidDate(date) ? dateFormat(date, pattern) : '';
}
//# sourceMappingURL=/Users/zxgerong/project/opensource/js/angular2/plugins/rebirth-ui/src/utils/date-utils.js.map