import { TestBed, inject } from '@angular/core/testing';

import { ThService } from './th.service';

describe('ThserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThService]
    });
  });

  it('should be created', inject([ThService], (service: ThService) => {
    expect(service).toBeTruthy();
  }));
});
