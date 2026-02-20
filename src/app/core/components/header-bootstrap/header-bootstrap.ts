import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-header-bootstrap',
  imports: [],
  templateUrl: './header-bootstrap.html',
  styleUrl: './header-bootstrap.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderBootstrap {
  readonly name = input('Tu Nombre');
  readonly role = input('Frontend Developer');
}
