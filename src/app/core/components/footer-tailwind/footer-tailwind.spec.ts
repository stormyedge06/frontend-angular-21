import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTailwind } from './footer-tailwind';

describe('FooterTailwind', () => {
  let component: FooterTailwind;
  let fixture: ComponentFixture<FooterTailwind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterTailwind],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterTailwind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
