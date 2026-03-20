import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindMenuComponent } from './menu-tailwind';

describe('TailwindMenuComponent', () => {
  let component: TailwindMenuComponent;
  let fixture: ComponentFixture<TailwindMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailwindMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TailwindMenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
