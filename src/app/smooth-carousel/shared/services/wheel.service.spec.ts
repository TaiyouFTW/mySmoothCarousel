import { TestBed } from '@angular/core/testing';

import { WheelService } from './wheel.service';

describe('WheelService', () => {
  let service: WheelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
