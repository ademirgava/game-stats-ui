import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseTipoComponent } from './fase-tipo.component';

describe('FaseTipoComponent', () => {
  let component: FaseTipoComponent;
  let fixture: ComponentFixture<FaseTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaseTipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaseTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
