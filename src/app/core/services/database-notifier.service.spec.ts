import { TestBed } from '@angular/core/testing';

import { DatabaseNotifierService } from './database-notifier.service';

describe('DatabaseNotifierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseNotifierService = TestBed.get(DatabaseNotifierService);
    expect(service).toBeTruthy();
  });
});
