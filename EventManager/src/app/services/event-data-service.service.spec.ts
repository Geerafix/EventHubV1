import { TestBed } from '@angular/core/testing';

import { EventDataServiceService } from './event-data-service.service';

describe('EventDataServiceService', () => {
  let service: EventDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
