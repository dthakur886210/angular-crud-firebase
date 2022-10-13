import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncetimeDistinctuntilComponent } from './debouncetime-distinctuntil.component';

describe('DebouncetimeDistinctuntilComponent', () => {
  let component: DebouncetimeDistinctuntilComponent;
  let fixture: ComponentFixture<DebouncetimeDistinctuntilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebouncetimeDistinctuntilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebouncetimeDistinctuntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
