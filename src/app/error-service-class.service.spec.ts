import { TestBed } from '@angular/core/testing';

import { ErrorServiceClassService } from './error-service-class.service';

describe('ErrorServiceClassService', () => {
  let service: ErrorServiceClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorServiceClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
