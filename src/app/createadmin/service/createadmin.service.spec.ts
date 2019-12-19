import { TestBed } from '@angular/core/testing';

import { CreateadminService } from './createadmin.service';

describe('CreateadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateadminService = TestBed.get(CreateadminService);
    expect(service).toBeTruthy();
  });
});
