import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTailwind } from './header-tailwind';

describe('HeaderTailwind', () => {
  let component: HeaderTailwind;
  let fixture: ComponentFixture<HeaderTailwind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTailwind],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderTailwind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
