import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsquemaVacunasPageRoutingModule } from './esquema-vacunas-routing.module';

import { EsquemaVacunasPage } from './esquema-vacunas.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EsquemaVacunasPageRoutingModule
  ],
  declarations: [EsquemaVacunasPage]
})
export class EsquemaVacunasPageModule {}
