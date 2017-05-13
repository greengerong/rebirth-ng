import { TemplateRef } from '@angular/core';
export interface AlertBoxModel {
  type: 'success' | 'info' | 'warning' | 'danger';
  html?: string;
  template?: TemplateRef<any>;
}
