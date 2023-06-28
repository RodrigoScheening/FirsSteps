import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarEdadPage } from './seleccionar-edad.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarEdadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarEdadPageRoutingModule {}
