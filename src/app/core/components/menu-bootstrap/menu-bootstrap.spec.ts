import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBootstrap } from './menu-bootstrap';

describe('MenuBootstrap', () => {
  let component: MenuBootstrap;
  let fixture: ComponentFixture<MenuBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBootstrap],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuBootstrap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
