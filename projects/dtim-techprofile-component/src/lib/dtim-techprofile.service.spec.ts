import { TestBed } from '@angular/core/testing';

import { DtimTechprofileService } from './dtim-techprofile.service';

describe('DtimTechprofileService', () => {
  let service: DtimTechprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DtimTechprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
