import { Routes } from '@angular/router';
import { Formulair } from './component/formulair/formulair';
import { FormulairReactive } from './component/formulair-reactive/formulair-reactive';

export const routes: Routes = [
  { path: '', redirectTo: 'template-driven', pathMatch: 'full' },
  {
    path: 'template-driven',
    component: Formulair,
    title: 'Exercice 1 - Template-Driven Forms',
  },
  {
    path: 'reactive',
    component: FormulairReactive,
    title: 'Exercice 2 - Reactive Forms',
  },
  { path: '**', redirectTo: 'template-driven' },
];
