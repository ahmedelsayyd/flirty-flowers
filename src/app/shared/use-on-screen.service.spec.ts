import { TestBed } from '@angular/core/testing';

import { UseOnScreenService } from './use-on-screen.service';

describe('UseOnScreenService', () => {
  let service: UseOnScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseOnScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
