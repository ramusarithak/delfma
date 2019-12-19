import { TestBed } from '@angular/core/testing';

import { SpdashboardService } from './spdashboard.service';

describe('SpdashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpdashboardService = TestBed.get(SpdashboardService);
    expect(service).toBeTruthy();
  });
});
