import { TestBed } from '@angular/core/testing';

import { ServTestService } from './serv-test.service';

describe('ServTestService', () => {
  let service: ServTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
