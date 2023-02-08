import { TestBed } from '@angular/core/testing';

import { WalfareService } from './walfare.service';

describe('WalfareService', () => {
  let service: WalfareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalfareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
