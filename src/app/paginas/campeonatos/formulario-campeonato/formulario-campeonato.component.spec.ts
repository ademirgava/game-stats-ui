import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCampeonatoComponent } from './formulario-campeonato.component';

describe('FormularioCampeonatoComponent', () => {
  let component: FormularioCampeonatoComponent;
  let fixture: ComponentFixture<FormularioCampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCampeonatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
