import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarVacunaPage } from './mostrar-vacuna.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarVacunaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarVacunaPageRoutingModule {}
