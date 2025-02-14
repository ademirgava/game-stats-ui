import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEquipesComponent } from './lista-equipes.component';

describe('ListaEquipesComponent', () => {
  let component: ListaEquipesComponent;
  let fixture: ComponentFixture<ListaEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEquipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
