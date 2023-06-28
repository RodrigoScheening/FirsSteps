import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaRecordatoriosPageRoutingModule } from './lista-recordatorios-routing.module';

import { ListaRecordatoriosPage } from './lista-recordatorios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaRecordatoriosPageRoutingModule
  ],
  declarations: [ListaRecordatoriosPage]
})
export class ListaRecordatoriosPageModule {}
