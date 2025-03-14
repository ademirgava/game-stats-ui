import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFeturesComponent } from './advanced-fetures.component';

describe('AdvancedFeturesComponent', () => {
  let component: AdvancedFeturesComponent;
  let fixture: ComponentFixture<AdvancedFeturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedFeturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedFeturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
