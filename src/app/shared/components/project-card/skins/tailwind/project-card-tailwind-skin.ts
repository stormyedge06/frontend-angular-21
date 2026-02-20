import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ProjectCardData } from '../../project-card.model';

@Component({
  selector: 'app-project-card-tailwind-skin',
  imports: [],
  templateUrl: './project-card-tailwind-skin.html',
  styleUrl: './project-card-tailwind-skin.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardTailwindSkin {
  readonly project = input.required<ProjectCardData>();
}
