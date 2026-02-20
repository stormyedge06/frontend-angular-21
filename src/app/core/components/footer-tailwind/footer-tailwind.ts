import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-footer-tailwind',
  imports: [],
  templateUrl: './footer-tailwind.html',
  styleUrl: './footer-tailwind.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterTailwind {
  readonly name = input('Tu Nombre');
  readonly year = computed(() => new Date().getFullYear());
}
