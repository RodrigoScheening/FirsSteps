import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostrarVacunaPage } from './mostrar-vacuna.page';

describe('MostrarVacunaPage', () => {
  let component: MostrarVacunaPage;
  let fixture: ComponentFixture<MostrarVacunaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MostrarVacunaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
