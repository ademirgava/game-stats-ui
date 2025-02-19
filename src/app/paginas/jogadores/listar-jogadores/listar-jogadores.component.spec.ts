import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJogadoresComponent } from './listar-jogadores.component';

describe('ListarJogadoresComponent', () => {
  let component: ListarJogadoresComponent;
  let fixture: ComponentFixture<ListarJogadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarJogadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarJogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
