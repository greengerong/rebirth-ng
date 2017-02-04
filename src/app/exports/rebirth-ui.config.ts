import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable()
export class RebirthUIConfig {

  rootContainer: ViewContainerRef;

  accordion = {
    type: '',
    keepOneItem: true,
    closable: false
  };

  alertBox = {
    type: 'info',
    closable: false,
  };

  datePicker = {
    locale: 'en-US',
    timePicker: false,
    dateParser: null, // (date: string, pattern: string, locale: string) => Date
    weeks: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    min: 1900,
    max: 2099,
    format: {
      date: 'yyyy-MM-dd',
      time: 'yyyy-MM-dd HH:mm'
    }
  };

  dialog = {
    button: {
      yes: 'Yes',
      no: 'No'
    }
  };

  pager = {
    pageSize: 10,
    aligned: true,
    button: {
      previous: '« Previous',
      next: 'Next »'
    }
  };

  pagination = {
    boundary: true,
    pageSize: 10,
    maxItems: 10,
    size: '', // '' | 'lg' | 'sm'
    button: {
      first: 'First',
      last: 'Last',
      pre: 'Previous',
      next: 'Next'
    }
  };

  panel = {
    type: 'default',
    closable: false,
    collapsable: false,
  };

  rating = {
    max: 10,
    icons: { stateOn: 'glyphicon glyphicon-star', stateOff: 'glyphicon glyphicon-star-empty' }
  };

  tabs = {
    type: 'tabs', // 'tabs' | 'pills'
    justified: false,
    vertical: false
  };
}
