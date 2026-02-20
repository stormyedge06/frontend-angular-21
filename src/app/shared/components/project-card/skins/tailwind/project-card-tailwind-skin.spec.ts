import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardTailwindSkin } from './project-card-tailwind-skin';

describe('ProjectCardTailwindSkin', () => {
  let component: ProjectCardTailwindSkin;
  let fixture: ComponentFixture<ProjectCardTailwindSkin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardTailwindSkin],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardTailwindSkin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
