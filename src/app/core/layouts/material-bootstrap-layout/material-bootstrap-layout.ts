import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterBootstrap } from '../../components/footer-bootstrap/footer-bootstrap';
import { HeaderBootstrap } from '../../components/header-bootstrap/header-bootstrap';

@Component({
  selector: 'app-material-bootstrap-layout',
  imports: [MatToolbarModule, MatButtonModule, HeaderBootstrap, FooterBootstrap],
  templateUrl: './material-bootstrap-layout.html',
  styleUrl: './material-bootstrap-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialBootstrapLayout {
  readonly name = input('Tu Nombre');
  readonly role = input('Frontend Developer');
  readonly switchLayout = output<void>();

  protected onSwitchLayout(): void {
    this.switchLayout.emit();
  }
}
