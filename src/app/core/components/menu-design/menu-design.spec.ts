import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDesign } from './menu-design';

describe('MenuDesign', () => {
  let component: MenuDesign;
  let fixture: ComponentFixture<MenuDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDesign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
