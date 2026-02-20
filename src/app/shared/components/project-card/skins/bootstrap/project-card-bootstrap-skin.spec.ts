import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardBootstrapSkin } from './project-card-bootstrap-skin';

describe('ProjectCardBootstrapSkin', () => {
  let component: ProjectCardBootstrapSkin;
  let fixture: ComponentFixture<ProjectCardBootstrapSkin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardBootstrapSkin],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardBootstrapSkin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
