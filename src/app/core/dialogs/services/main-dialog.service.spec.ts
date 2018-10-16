import { TestBed } from '@angular/core/testing';

import { MainDialogService } from './main-dialog.service';

describe('MainDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainDialogService = TestBed.get(MainDialogService);
    expect(service).toBeTruthy();
  });
});
