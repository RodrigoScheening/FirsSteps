import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarRecordatorioPage } from './actualizar-recordatorio.page';

describe('ActualizarRecordatorioPage', () => {
  let component: ActualizarRecordatorioPage;
  let fixture: ComponentFixture<ActualizarRecordatorioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActualizarRecordatorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
