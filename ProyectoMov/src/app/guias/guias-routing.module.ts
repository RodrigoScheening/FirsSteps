import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiasPage } from './guias.page';

const routes: Routes = [
  {
    path: '',
    component: GuiasPage
  },
  {
    path: 'esquema-vacunas',
    loadChildren: () => import('./esquema-vacunas/esquema-vacunas.module').then( m => m.EsquemaVacunasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuiasPageRoutingModule {}
