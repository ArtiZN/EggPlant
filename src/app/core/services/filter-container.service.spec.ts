import { TestBed } from '@angular/core/testing';

import { FilterContainerService } from './filter-container.service';

describe('FilterContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterContainerService = TestBed.get(FilterContainerService);
    expect(service).toBeTruthy();
  });
});
