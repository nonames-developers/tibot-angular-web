import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaEscaneadoComponent } from './mapa-escaneado.component';

describe('MapaEscaneadoComponent', () => {
  let component: MapaEscaneadoComponent;
  let fixture: ComponentFixture<MapaEscaneadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaEscaneadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaEscaneadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
