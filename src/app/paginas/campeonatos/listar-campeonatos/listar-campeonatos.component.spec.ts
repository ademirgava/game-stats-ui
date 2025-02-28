import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCampeonatosComponent } from './listar-campeonatos.component';

describe('ListarCampeonatosComponent', () => {
  let component: ListarCampeonatosComponent;
  let fixture: ComponentFixture<ListarCampeonatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCampeonatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCampeonatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
