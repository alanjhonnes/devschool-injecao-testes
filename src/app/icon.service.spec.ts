import { TestBed } from '@angular/core/testing';

import { IconService } from './icon.service';

describe('IconService', () => {
  let service: IconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('return an icon', () => {
    expect(service.getIcon()).toBe('🌸');
  });
});
