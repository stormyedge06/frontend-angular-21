import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { LayoutMode } from '../../../core/models/layout-mode.type';
import type { ProjectCardData } from './project-card.model';
import { ProjectCardBootstrapSkin } from './skins/bootstrap/project-card-bootstrap-skin';
import { ProjectCardTailwindSkin } from './skins/tailwind/project-card-tailwind-skin';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCardBootstrapSkin, ProjectCardTailwindSkin],
})
export class ProjectCard {
  readonly project = input.required<ProjectCardData>();
  readonly layout = input<LayoutMode>('bootstrap');
}
