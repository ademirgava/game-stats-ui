import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFasesComponent } from './listar-fases.component';

describe('ListarFasesComponent', () => {
  let component: ListarFasesComponent;
  let fixture: ComponentFixture<ListarFasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarFasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
