import { TestBed } from '@angular/core/testing';

import { JobstatusService } from './jobstatus.service';

describe('JobstatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobstatusService = TestBed.get(JobstatusService);
    expect(service).toBeTruthy();
  });
});
