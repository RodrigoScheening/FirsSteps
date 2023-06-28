import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guias',
  templateUrl: './guias.page.html',
  styleUrls: ['./guias.page.scss'],
})
export class GuiasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarAEsquemaVacunas() {
    this.router.navigate(['/esquema-vacunas']);
  }
}
