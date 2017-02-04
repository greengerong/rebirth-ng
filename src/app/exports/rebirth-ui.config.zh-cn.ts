import { Injectable, ViewContainerRef } from '@angular/core';
import { RebirthUIConfig } from './rebirth-ui.config';

@Injectable()
export class ZHCNRebirthUIConfig extends RebirthUIConfig {

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
    locale: 'zh-CN',
    timePicker: false,
    dateParser: (date: string, pattern: string, locale: string) => {
      if (date && locale === this.datePicker.locale) {
        return new Date(date.replace(/[年月日时分秒]+/g, ''));
      }
    }, // (date: string, pattern: string, locale: string) => Date
    weeks: ['日', '一', '二', '三', '四', '五', '六'],
    months: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
    min: 1900,
    max: 2099,
    format: {
      date: 'yyyy-MM-dd',
      time: 'yyyy-MM-dd HH:mm'
    }
  };

  dialog = {
    button: {
      yes: '确定',
      no: '取消'
    }
  };

  pager = {
    pageSize: 10,
    aligned: true,
    button: {
      previous: '« 上一页',
      next: '下一页 »'
    }
  };

  pagination = {
    boundary: true,
    pageSize: 10,
    maxItems: 10,
    size: '', // '' | 'lg' | 'sm'
    button: {
      first: '首页',
      last: '尾页',
      pre: '前一页',
      next: '下一页'
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
