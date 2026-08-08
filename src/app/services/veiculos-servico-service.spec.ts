import { TestBed } from '@angular/core/testing';

import { VeiculosServicoService } from './veiculos-servico-service';

describe('VeiculosServicoService', () => {
  let service: VeiculosServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeiculosServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
