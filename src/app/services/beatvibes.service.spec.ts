import { TestBed } from '@angular/core/testing';

import { BeatvibesService } from './beatvibes.service';

describe('BeatvibesService', () => {
  let service: BeatvibesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeatvibesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
