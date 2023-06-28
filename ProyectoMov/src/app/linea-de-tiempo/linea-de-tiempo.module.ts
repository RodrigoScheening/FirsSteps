import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineaDeTiempoPageRoutingModule } from './linea-de-tiempo-routing.module';

import { LineaDeTiempoPage } from './linea-de-tiempo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineaDeTiempoPageRoutingModule
  ],
  declarations: [LineaDeTiempoPage]
})
export class LineaDeTiempoPageModule {}
