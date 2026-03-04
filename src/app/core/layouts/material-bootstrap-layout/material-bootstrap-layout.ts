import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { FooterBootstrap } from '../../components/footer-bootstrap/footer-bootstrap';
import { HeaderBootstrap } from '../../components/header-bootstrap/header-bootstrap';
import { MenuBootstrap } from '../../components/menu-bootstrap/menu-bootstrap';
import type { LayoutMode, ThemeMode } from '../../models/layout-mode.type';

@Component({
  selector: 'app-material-bootstrap-layout',
  imports: [HeaderBootstrap, FooterBootstrap, MenuBootstrap],
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
  protected readonly menuOpen = signal(false);

  protected onToggleMenu(): void {
    this.menuOpen.update((current) => !current);
  }

  protected onCloseMenu(): void {
    this.menuOpen.set(false);
  }

  protected onSwitchLayout(): void {
    this.switchLayout.emit();
  }

  protected onSwitchTheme(): void {
    this.switchTheme.emit();
  }
}
