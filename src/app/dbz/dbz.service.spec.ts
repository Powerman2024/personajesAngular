import { TestBed } from '@angular/core/testing';

import { DbzService } from './dbz.service';

describe('DbzServiceTsService', () => {
  let service: DbzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
