import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarRecordatorioPageRoutingModule } from './actualizar-recordatorio-routing.module';

import { ActualizarRecordatorioPage } from './actualizar-recordatorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarRecordatorioPageRoutingModule
  ],
  declarations: [ActualizarRecordatorioPage]
})
export class ActualizarRecordatorioPageModule {}
