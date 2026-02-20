import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBootstrap } from './footer-bootstrap';

describe('FooterBootstrap', () => {
  let component: FooterBootstrap;
  let fixture: ComponentFixture<FooterBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBootstrap],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterBootstrap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
