import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFaseComponent } from './formulario-fase.component';

describe('FormularioFaseComponent', () => {
  let component: FormularioFaseComponent;
  let fixture: ComponentFixture<FormularioFaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioFaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
