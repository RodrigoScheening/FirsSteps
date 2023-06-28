import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Recordatorios', url: 'recordatorios', icon: 'time' },
    { title: 'Guias', url: 'guias', icon: 'planet' },
    { title: 'Linea de tiempo', url: 'linea-de-tiempo', icon: 'git-compare' },
    { title: 'Login', url: 'login', icon: 'log-in' },
  ];
  public labels = ['Family','Notes'];
  constructor() {}
}
