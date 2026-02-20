import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ProjectCardData } from '../../project-card.model';

@Component({
  selector: 'app-project-card-bootstrap-skin',
  imports: [],
  templateUrl: './project-card-bootstrap-skin.html',
  styleUrl: './project-card-bootstrap-skin.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardBootstrapSkin {
  readonly project = input.required<ProjectCardData>();
}
