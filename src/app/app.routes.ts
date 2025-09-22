import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home'; 

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio | Mi PWA' },

  { path: '**', redirectTo: '' }
];
