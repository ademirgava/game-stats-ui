import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEquipeComponent } from './formulario-equipe.component';

describe('FormularioEquipeComponent', () => {
  let component: FormularioEquipeComponent;
  let fixture: ComponentFixture<FormularioEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEquipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
