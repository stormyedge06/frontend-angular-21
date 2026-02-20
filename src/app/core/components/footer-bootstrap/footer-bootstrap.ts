import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-footer-bootstrap',
  imports: [],
  templateUrl: './footer-bootstrap.html',
  styleUrl: './footer-bootstrap.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterBootstrap {
  readonly name = input('Tu Nombre');
  readonly year = computed(() => new Date().getFullYear());
}
