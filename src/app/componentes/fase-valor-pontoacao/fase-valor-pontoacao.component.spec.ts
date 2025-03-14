import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseValorPontoacaoComponent } from './fase-valor-pontoacao.component';

describe('FaseValorPontoacaoComponent', () => {
  let component: FaseValorPontoacaoComponent;
  let fixture: ComponentFixture<FaseValorPontoacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaseValorPontoacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaseValorPontoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
