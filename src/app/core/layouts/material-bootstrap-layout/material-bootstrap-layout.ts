import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterBootstrap } from '../../components/footer-bootstrap/footer-bootstrap';
import { HeaderBootstrap } from '../../components/header-bootstrap/header-bootstrap';
import type { LayoutMode, ThemeMode } from '../../models/layout-mode.type';

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
  readonly layoutMode = input<LayoutMode>('bootstrap');
  readonly themeMode = input<ThemeMode>('light');
  readonly switchLayout = output<void>();
  readonly switchTheme = output<void>();

  protected onSwitchLayout(): void {
    this.switchLayout.emit();
  }

  protected onSwitchTheme(): void {
    this.switchTheme.emit();
  }
}
