import { TestBed, inject } from '@angular/core/testing';

import { PaggingService } from './pagging.service';

describe('PaggingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaggingService]
    });
  });

  it('should ...', inject([PaggingService], (service: PaggingService) => {
    expect(service).toBeTruthy();
  }));
});
