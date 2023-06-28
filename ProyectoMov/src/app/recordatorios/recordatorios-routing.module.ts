import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordatoriosPage } from './recordatorios.page';

const routes: Routes = [
  {
    path: '',
    component: RecordatoriosPage
  },
  {
    path: 'lista-recordatorios',
    loadChildren: () => import('./lista-recordatorios/lista-recordatorios.module').then( m => m.ListaRecordatoriosPageModule)
  },
  {
    path: 'actualizar-recordatorio',
    loadChildren: () => import('./actualizar-recordatorio/actualizar-recordatorio.module').then( m => m.ActualizarRecordatorioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordatoriosPageRoutingModule {}
