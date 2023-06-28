import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ListaRecordatoriosPage } from './lista-recordatorios.page';

describe('ListaRecordatoriosPage', () => {
  let component: ListaRecordatoriosPage;
  let fixture: ComponentFixture<ListaRecordatoriosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaRecordatoriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
