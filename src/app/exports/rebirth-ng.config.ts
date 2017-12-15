import { Inject, Injectable, Input, LOCALE_ID, ViewContainerRef } from '@angular/core';

@Injectable()
export class RebirthNGConfig {

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

  alertBoxPanel = {
    placement: 'top-right',
    cssClass: '',
    width: '',
  };

  autoComplete = {
    delay: 300,
    minLength: 3,
    itemTemplate: null,
    noResultItemTemplate: null,
    formatter: (item) => item ? (item.label || item.toString()) : '',
  };

  carousel = {
    interval: 0,
    animate: false,
    reflowDuration: 30,
    animationDuration: 600
  };

  checkboxGroup = {
    formatter: (item) => item ? (item.label || item.toString()) : '',
    valueParser: (item) => item
  };

  datePicker = {
    locale: 'en-US',
    today: 'Today',
    timePicker: false,
    dateConverter: null, // DateConverter
    weeks: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    min: 1900,
    max: 2099,
    format: {
      date: 'YYYY-MM-DD',
      time: 'YYYY-MM-DD HH:mm'
    }
  };

  dialog = {
    button: {
      yes: 'Yes',
      btnYesType: 'primary',
      no: 'No',
      btnNoType: 'warning'
    }
  };

  ellipsis = {
    length: 60,
    placement: 'top'
  };

  fileUpload = {
    imgPreview: false,
    previewWidth: '104px',
    previewHeight: '104px',
    uploadParamName: 'file',
    fileSizeErrorMessage: '{0}: size is too large, allowed size is {1};',
    fileTypeErrorMessage: '{0}: file type is invalid, allowed file type is {1};',
    chooseButton: 'Choose',
    uploadButton: 'Upload',
    cancelButton: 'Cancel',
    plusIcon: 'glyphicon glyphicon-plus',
    loadingIcon: 'glyphicon glyphicon-refresh',
    uploadIcon: 'glyphicon glyphicon-upload',
    removeIcon: 'glyphicon glyphicon-trash',
  };

  imageUpload = {
    viewIcon: 'glyphicon glyphicon-eye-open'
  };

  modal = {
    animation: true
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
    maxItems: 5,
    size: '', // '' | 'lg' | 'sm'
    button: {
      first: 'First',
      last: 'Last',
      pre: 'Previous',
      next: 'Next',
      firstLinkCssClass: 'firstLink',
      preLinkCssClass: 'preLink',
      nextLinkCssClass: 'nextLink',
      lastLinkCssClass: 'lastLink'
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

  radioGroup = {
    formatter: (item) => item ? (item.label || item.toString()) : '',
    valueParser: (item) => item
  };

  rating = {
    max: 10,
    icons: { stateOn: 'glyphicon glyphicon-star', stateOff: 'glyphicon glyphicon-star-empty' }
  };

  selectButton = {
    type: 'primary',
    justified: false,
    multiple: false
  };

  switchBtn = {
    onText: 'ON',
    offText: 'OFF',
    type: 'primary'
  };

  tabs = {
    type: 'tabs', // 'tabs' | 'pills'
    justified: false,
    vertical: false
  };

  tags = {
    type: 'primary',
    newTagText: 'NEW TAG',
    plusIcon: 'glyphicon glyphicon-plus',
    removeIcon: 'glyphicon glyphicon-remove',
    maxlength: 20,
    maxSize: 0
  };

  treeView = {
    textField: 'label',
    valueField: 'id',
    leafIcon: 'glyphicon glyphicon-leaf',
    expendIcon: 'glyphicon glyphicon-chevron-down',
    collapseIcon: 'glyphicon glyphicon-chevron-right',
    loadingIcon: 'glyphicon glyphicon-cloud-download',
  };
  // constructor(@Inject(LOCALE_ID) private locale: string) {
  // }

  extend(obj: any): this {
    Object.keys(obj || {})
      .reduce((target, key) => {
        target[key] = obj[key];
        return target;
      }, this);

    return this;
  }
}
