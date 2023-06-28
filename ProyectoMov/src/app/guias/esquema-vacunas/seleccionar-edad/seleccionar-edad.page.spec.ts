import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionarEdadPage } from './seleccionar-edad.page';

describe('SeleccionarEdadPage', () => {
  let component: SeleccionarEdadPage;
  let fixture: ComponentFixture<SeleccionarEdadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionarEdadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
