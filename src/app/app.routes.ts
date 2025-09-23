import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home';
import { UIComponent } from './features/ui/pages/ui';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio | Mi PWA' },
  { path: 'ui', component: UIComponent, title: 'UI | Mi PWA' },
  { path: '**', redirectTo: '' }
];
