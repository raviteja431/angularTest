import { TestBed } from '@angular/core/testing';

import { BeerserviceService } from './beerservice.service';

describe('BeerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerserviceService = TestBed.get(BeerserviceService);
    expect(service).toBeTruthy();
  });
});
