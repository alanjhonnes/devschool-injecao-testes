import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconService } from '../icon.service';

import { HostComponent } from './host.component';

describe('HostComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent],
      providers: [
        {
          provide: IconService,
          useValue: {
            getIcon: () => 'abc'
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toEqual;
  });
});
