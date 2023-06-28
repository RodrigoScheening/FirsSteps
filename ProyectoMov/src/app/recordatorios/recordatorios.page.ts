import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Irecordatorio } from '../interfaces/Irecordatorio';
import { RecordatoriosService } from '../services/recordatorios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.page.html',
  styleUrls: ['./recordatorios.page.scss'],
})
export class RecordatoriosPage implements OnInit {

  textoRecordatorio: string = '';
  horaRecordatorio: string = '';
  recordatorios: any[] = [];

  constructor(private localNotifications: LocalNotifications, private recordatoriosService: RecordatoriosService, private router: Router) { }

  ngOnInit() {
    this.cargarRecordatorios();
  }

  programarNotification() {
    let horaMinutos = this.horaRecordatorio.slice(11, 16);

    let recordatorio: Irecordatorio = {
      texto: this.textoRecordatorio,
      hora: horaMinutos,
      id: Date.now()
  };

  this.recordatoriosService.createRecordatorio(recordatorio).subscribe(response =>{
  console.log(response);
  this.localNotifications.schedule({
    id: recordatorio.id,
    text: recordatorio.texto,
    trigger: {at:new Date(recordatorio.hora)},
    led:'FFOOO',
      });
    });
  }
  cargarRecordatorios(){
    this.recordatoriosService.getRecordatorios().subscribe((recordatorios: Irecordatorio[]) => {
      for (let recordatorio of recordatorios) {
        this.localNotifications.schedule({
          id: recordatorio.id,
          text: recordatorio.texto,
          trigger: {at: new Date (recordatorio.hora)},
          led:'FFOOO',
        });
      }
    });
  }

  navegarALista(){
    this.router.navigateByUrl('recordatorios/lista-recordatorios');
  }

  actualizarRecordatorio(recordatorio: Irecordatorio){
    this.recordatoriosService.updateRecordatorio(recordatorio).subscribe(() => {
      this.cargarRecordatorios();
    })
  }
}