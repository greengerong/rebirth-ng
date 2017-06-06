import { Routes } from '@angular/router';
import { GettingStartedComponent, ShowcaseComponent } from './feature';


export const ROUTER_CONFIG: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/gettingStarted' },
  { path: 'gettingStarted', component: GettingStartedComponent, data: { reusable: true } },
  { path: 'component/:name', component: ShowcaseComponent, data: { reusable: true } },
];
