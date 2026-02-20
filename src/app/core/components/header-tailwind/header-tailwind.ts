import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-header-tailwind',
  imports: [],
  templateUrl: './header-tailwind.html',
  styleUrl: './header-tailwind.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderTailwind {
  readonly name = input('Tu Nombre');
  readonly role = input('Frontend Developer');
}
