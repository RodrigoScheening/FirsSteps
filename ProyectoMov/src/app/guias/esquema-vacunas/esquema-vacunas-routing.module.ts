import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquemaVacunasPage } from './esquema-vacunas.page';

const routes: Routes = [
  {
    path: '',
    component: EsquemaVacunasPage
  },
  {
    path: 'seleccionar-edad',
    loadChildren: () => import('./seleccionar-edad/seleccionar-edad.module').then( m => m.SeleccionarEdadPageModule)
  },
  {
    path: 'mostrar-vacuna',
    loadChildren: () => import('./mostrar-vacuna/mostrar-vacuna.module').then( m => m.MostrarVacunaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquemaVacunasPageRoutingModule {}
