import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineaDeTiempoPage } from './linea-de-tiempo.page';

describe('LineaDeTiempoPage', () => {
  let component: LineaDeTiempoPage;
  let fixture: ComponentFixture<LineaDeTiempoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LineaDeTiempoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
