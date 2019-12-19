import { TestBed } from '@angular/core/testing';

import { JobpriorityService } from './jobpriority.service';

describe('JobpriorityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobpriorityService = TestBed.get(JobpriorityService);
    expect(service).toBeTruthy();
  });
});
