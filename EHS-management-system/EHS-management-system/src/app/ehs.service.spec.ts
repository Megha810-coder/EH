import { TestBed } from '@angular/core/testing';

import { EhsService } from './ehs.service';

describe('EhsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EhsService = TestBed.get(EhsService);
    expect(service).toBeTruthy();
  });
});
