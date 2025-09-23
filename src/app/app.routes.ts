import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home';
import { UIComponent } from './features/ui/pages/ui';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio' },
  { path: 'ui', component: UIComponent, title: 'UI' },
  { path: '**', redirectTo: '' }
];
