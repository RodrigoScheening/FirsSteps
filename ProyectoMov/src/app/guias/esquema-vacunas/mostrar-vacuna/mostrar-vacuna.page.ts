import { Component, OnInit } from '@angular/core';
import { VacunasService } from '../../../services/vacunas.service';
import { Vacunas } from '../../../interfaces/vacunas';

@Component({
  selector: 'app-mostrar-vacuna',
  templateUrl: './mostrar-vacuna.page.html',
  styleUrls: ['./mostrar-vacuna.page.scss'],
})
export class MostrarVacunaPage implements OnInit {
  infante!: string;
  edad!: string;
  vacunas: Vacunas [] = []

  constructor(private vacunasService: VacunasService) { }

  ngOnInit() {}

  buscar(){
    this.vacunasService.getVacunas(this.infante, this.edad).subscribe(vacunas => {
      this.vacunas = vacunas;
    })
  }

}
