import { TestBed } from '@angular/core/testing';

import { IsOnHomepageService } from './is-on-homepage.service';

describe('IsOnHomepageService', () => {
  let service: IsOnHomepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsOnHomepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
