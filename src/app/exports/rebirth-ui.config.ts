import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable()
export class RebirthUIConfig {

  rootContainer: ViewContainerRef;

  alertBox = {
    type: 'info',
    closable: false,
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

}
