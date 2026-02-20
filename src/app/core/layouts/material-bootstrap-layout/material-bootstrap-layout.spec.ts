import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialBootstrapLayout } from './material-bootstrap-layout';

describe('MaterialBootstrapLayout', () => {
  let component: MaterialBootstrapLayout;
  let fixture: ComponentFixture<MaterialBootstrapLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialBootstrapLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialBootstrapLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
