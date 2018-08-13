import { TemplateRef } from '@angular/core';
export interface NotifyModel {
  type: 'success' | 'info' | 'warning' | 'danger';
  html?: string;
  template?: TemplateRef<any>;
}
