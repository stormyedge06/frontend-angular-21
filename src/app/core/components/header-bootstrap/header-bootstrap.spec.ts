import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBootstrap } from './header-bootstrap';

describe('HeaderBootstrap', () => {
  let component: HeaderBootstrap;
  let fixture: ComponentFixture<HeaderBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBootstrap],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderBootstrap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
