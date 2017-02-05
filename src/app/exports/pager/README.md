
  <re-pager [total]="pager.total" [pageSize]="pager.pageSize" [(pageIndex)]="pager.pageIndex"
            (pageIndexChange)="pageChange($event)" previousText="&larr; Older" nextText="Newer &rarr;">
  </re-pager>
