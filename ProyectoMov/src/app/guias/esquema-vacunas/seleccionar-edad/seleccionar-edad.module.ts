import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarEdadPageRoutingModule } from './seleccionar-edad-routing.module';

import { SeleccionarEdadPage } from './seleccionar-edad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarEdadPageRoutingModule
  ],
  declarations: [SeleccionarEdadPage]
})
export class SeleccionarEdadPageModule {}
