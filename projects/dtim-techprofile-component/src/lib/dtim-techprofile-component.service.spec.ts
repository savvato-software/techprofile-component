import { TestBed } from '@angular/core/testing';

import { DtimTechprofileComponentService } from './dtim-techprofile-component.service';

describe('DtimTechprofileComponentService', () => {
  let service: DtimTechprofileComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DtimTechprofileComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
