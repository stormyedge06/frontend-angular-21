import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTailwindLayout } from './material-tailwind-layout';

describe('MaterialTailwindLayout', () => {
  let component: MaterialTailwindLayout;
  let fixture: ComponentFixture<MaterialTailwindLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialTailwindLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialTailwindLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
