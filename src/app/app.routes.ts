import { Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';

export const routes: Routes = [
  { path: '', redirectTo: '/base', pathMatch: 'full' },
  { path: 'base', component: BaseComponent },
];
