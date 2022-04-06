import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipSelfChildComponent } from './skip-self-child.component';

describe('SkipSelfChildComponent', () => {
  let component: SkipSelfChildComponent;
  let fixture: ComponentFixture<SkipSelfChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkipSelfChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipSelfChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
