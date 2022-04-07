import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalComponent } from './optional.component';

describe('OptionalComponent', () => {
  let component: OptionalComponent;
  let fixture: ComponentFixture<OptionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show icon from service', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.icon')?.textContent).toContain('👾');
  })
});
