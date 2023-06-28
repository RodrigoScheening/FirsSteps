import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarVacunaPageRoutingModule } from './mostrar-vacuna-routing.module';

import { MostrarVacunaPage } from './mostrar-vacuna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarVacunaPageRoutingModule
  ],
  declarations: [MostrarVacunaPage]
})
export class MostrarVacunaPageModule {}
