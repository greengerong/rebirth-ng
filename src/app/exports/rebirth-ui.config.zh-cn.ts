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
    dateConverter: null, // DateConverter
    weeks: ['日', '一', '二', '三', '四', '五', '六'],
    months: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
    min: 1900,
    max: 2099,
    format: {
      date: 'YYYY-MM-DD',
      time: 'YYYY-MM-DD HH:mm'
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

  progressBar = {
    type: '',
    max: 100,
    animate: false,
    striped: false
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
