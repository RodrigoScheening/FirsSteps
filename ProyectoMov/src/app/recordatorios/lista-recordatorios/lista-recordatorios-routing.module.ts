import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaRecordatoriosPage } from './lista-recordatorios.page';

const routes: Routes = [
  {
    path: '',
    component: ListaRecordatoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaRecordatoriosPageRoutingModule {}
