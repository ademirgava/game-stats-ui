import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJogadorComponent } from './formulario-jogador.component';

describe('FormularioJogadorComponent', () => {
  let component: FormularioJogadorComponent;
  let fixture: ComponentFixture<FormularioJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioJogadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
