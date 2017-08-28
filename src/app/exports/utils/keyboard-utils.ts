const TAB_KEY_CODE = 9;

function range(start: number, end: number) {
  const result = [];
  let index = start;
  while (index < end) {
    result.push(index);
    index++;
  }
  return result;
}

const ARROW_KEY_CODE_RANGE = range(37, 41);


const smallKeyBoard = function (event) {
  const which = event.which;
  return (which >= 96 && which <= 105);
};

const numberKeyBoard = function (event) {
  const which = event.which;
  return (which >= 48 && which <= 57) && !event.shiftKey;
};

const functionKeyBoard = function (event) {
  const which = event.which;
  return (which <= 40) || (navigator.platform.indexOf('Mac') > -1 && event.metaKey) ||
    (navigator.platform.indexOf('Win') > -1 && event.ctrlKey);
};

const currencyKeyBoard = function (event, viewValue) {
  const which = event.which;
  return (viewValue.toString().indexOf('$') === -1 && which === 52 && event.shiftKey);
};

const floatKeyBoard = function (event, viewValue) {
  const which = event.which;
  return [188].indexOf(which) !== -1 || (which === 190 || which === 110) &&
    viewValue.toString().indexOf('.') === -1;
};

const tabKeyBoard = function (event) {
  return event.which === TAB_KEY_CODE;
};

const arrowKeyBoard = function (event) {
  return ARROW_KEY_CODE_RANGE.indexOf(event.which) > -1;
};

export const keyBoardHelper = {
  smallKeyBoard,
  numberKeyBoard,
  functionKeyBoard,
  currencyKeyBoard,
  floatKeyBoard,
  tabKeyBoard,
  arrowKeyBoard,
};
