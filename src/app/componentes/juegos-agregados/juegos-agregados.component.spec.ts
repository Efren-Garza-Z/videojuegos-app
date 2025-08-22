import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosAgregadosComponent } from './juegos-agregados.component';

describe('JuegosAgregadosComponent', () => {
  let component: JuegosAgregadosComponent;
  let fixture: ComponentFixture<JuegosAgregadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosAgregadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosAgregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
