import { TestBed } from '@angular/core/testing';
import { IconService } from './icon.service';

import { OptionalService } from './optional.service';

describe('OptionalService', () => {
  let service: OptionalService;
  let iconServiceMock: IconService;

  beforeEach(() => {
    iconServiceMock = {
      getIcon: () => 'abc'
    }
    TestBed.configureTestingModule({
      providers: [
        {
          provide: IconService,
          useValue: iconServiceMock
        }
      ]
    });
    service = TestBed.inject(OptionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('return an icon', () => {
    const spy = spyOn(iconServiceMock, "getIcon")
    expect(service.getIcon()).toBe('abc');
    expect(spy).toHaveBeenCalled()
  });
});
