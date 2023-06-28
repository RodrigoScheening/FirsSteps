import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esquema-vacunas',
  templateUrl: './esquema-vacunas.page.html',
  styleUrls: ['./esquema-vacunas.page.scss'],
})
export class EsquemaVacunasPage {
  filtroForm!: FormGroup;
  edades!: string[];

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit(){
    this.filtroForm = this.formBuilder.group({
      tipoInfante: ['', Validators.required],
      edadInfante: ['', Validators.required]
    });

    this.edades = [];
  }

  buscarVacunas() {
    const tipoInfante = this.filtroForm.get('tipoInfante')?.value;
    const edadInfante = this.filtroForm.get('edadInfante')?.value;
    this.router.navigate(['/mostrar-vacuna', tipoInfante, edadInfante]);
  }

  actualizarEdades() {
    const tipoInfante = this.filtroForm.get('tipoInfante')?.value;

    switch (tipoInfante) {
      case 'Lactante':
        this.edades = ['Recién Nacido', '2 y 4 meses', '6 meses', '12 meses', '18 meses'];
        break;
      case 'Pre-escolar':
        this.edades = ['36 meses'];
        break;
      case 'Escolar':
        this.edades = ['1° Básico', '4° Básico', '5° Básico', '8° Básico'];
        break;
      default:
        this.edades = [];
        break;
    }

    this.filtroForm.get('edadInfante')?.reset();
  }
}
