export const REBIRTH_NG_I18N_ZHCN = {

  datePicker: {
    locale: 'zh-CN',
    today: '今天',
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
  },

  dialog: {
    button: {
      yes: '确定',
      btnYesType: 'primary',
      no: '取消',
      btnNoType: 'warning'
    }
  },

  fileUpload: {
    imgPreview: false,
    previewWidth: '50px',
    uploadParamName: 'file',
    fileSizeErrorMessage: '{0}文件大小不能超过{1};',
    fileTypeErrorMessage: '{0}文件类型必须满足{1};',
    chooseButton: '浏览',
    uploadButton: '上传',
    cancelButton: '取消'
  },

  pager: {
    pageSize: 10,
    aligned: true,
    button: {
      previous: '« 上一页',
      next: '下一页 »'
    }
  }
  ,

  pagination: {
    boundary: true,
    pageSize: 10,
    maxItems: 5,
    size: '', // '' | 'lg' | 'sm'
    button: {
      first: '首页',
      last: '尾页',
      pre: '前一页',
      next: '下一页',
      firstLinkCssClass: 'firstLink',
      preLinkCssClass: 'preLink',
      nextLinkCssClass: 'nextLink',
      lastLinkCssClass: 'lastLink'
    }
  }
  ,

  switchBtn: {
    onText: '开启',
    offText: '关闭',
    type: 'primary'
  },

  tags: {
    type: 'primary',
    newTagText: '添加标签',
    plusIcon: 'glyphicon glyphicon-plus',
    removeIcon: 'glyphicon glyphicon-remove',
    maxlength: 20,
    maxSize: 0
  }
};
