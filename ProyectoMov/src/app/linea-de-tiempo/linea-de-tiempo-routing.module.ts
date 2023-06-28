import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineaDeTiempoPage } from './linea-de-tiempo.page';

const routes: Routes = [
  {
    path: '',
    component: LineaDeTiempoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineaDeTiempoPageRoutingModule {}
