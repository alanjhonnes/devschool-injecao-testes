import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfOptionalComponent } from './self-optional.component';

describe('SelfOptionalComponent', () => {
  let component: SelfOptionalComponent;
  let fixture: ComponentFixture<SelfOptionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfOptionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfOptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
