import { TestBed } from '@angular/core/testing';

import { FaseTipoService } from './fase-tipo.service';

describe('FaseTipoService', () => {
  let service: FaseTipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaseTipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
