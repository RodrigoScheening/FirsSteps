import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { EsquemaVacunasPage } from './esquema-vacunas.page';

describe('EsquemaVacunasPage', () => {
  let component: EsquemaVacunasPage;
  let fixture: ComponentFixture<EsquemaVacunasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EsquemaVacunasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
