import { TestBed } from '@angular/core/testing';

import { LinkexpiredService } from './linkexpired.service';

describe('LinkexpiredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkexpiredService = TestBed.get(LinkexpiredService);
    expect(service).toBeTruthy();
  });
});
