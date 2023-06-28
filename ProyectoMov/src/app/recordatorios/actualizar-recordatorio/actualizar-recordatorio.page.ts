import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Irecordatorio } from 'src/app/interfaces/Irecordatorio';
import { RecordatoriosService } from 'src/app/services/recordatorios.service';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-actualizar-recordatorio',
  templateUrl: './actualizar-recordatorio.page.html',
  styleUrls: ['./actualizar-recordatorio.page.scss'],
})
export class ActualizarRecordatorioPage implements OnInit {
  textoRecordatorio: string = '';
  horaRecordatorio: string = '';
  recordatorioId!: number;

  constructor(private activatedRoute: ActivatedRoute, private recordatoriosService: RecordatoriosService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.recordatorioId = Number(params.get('id'));
    });
  }

  updateRecordatorio() {
    let horaMinutos = this.horaRecordatorio.slice(11, 16);

    let recordatorio: Irecordatorio = {
      texto: this.textoRecordatorio,
      hora: horaMinutos,
      id: this.recordatorioId 
    };

    this.recordatoriosService.updateRecordatorio(recordatorio).pipe(finalize(() =>
    this.router.navigate(['/recordatorios']))).subscribe(() => {
      console.log('Recordatorio actualizado con éxito');
    });
  }
}

