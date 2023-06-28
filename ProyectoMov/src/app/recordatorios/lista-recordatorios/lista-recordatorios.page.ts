import { Component, OnInit } from '@angular/core';
import { Irecordatorio } from 'src/app/interfaces/Irecordatorio';
import { RecordatoriosService } from 'src/app/services/recordatorios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-recordatorios',
  templateUrl: './lista-recordatorios.page.html',
  styleUrls: ['./lista-recordatorios.page.scss'],
})
export class ListaRecordatoriosPage implements OnInit {
  recordatorios: Irecordatorio[] = [];

  constructor(private recordatorioService: RecordatoriosService, private router: Router) { }

  ngOnInit() {
    this.cargarRecordatorios();
  }
  
  cargarRecordatorios() {
    this.recordatorioService.getRecordatorios().subscribe(recordatorios => {
      this.recordatorios = recordatorios;
    });
  }
  
  eliminarRecordatorio(id: number){
    this.recordatorioService.deleteRecordatorio(id).subscribe(() => {
      this.cargarRecordatorios();
    })
  }

  navegarAActualizar(id: number){
    this.router.navigate(['actualizar-recordatorio', id]);
  }

}
