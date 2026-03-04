import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import type { LayoutMode, ThemeMode } from '../../models/layout-mode.type';

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
  readonly menuOpen = input(false);
  readonly layoutMode = input<LayoutMode>('bootstrap');
  readonly themeMode = input<ThemeMode>('light');
  readonly toggleMenu = output<void>();
  readonly switchLayout = output<void>();
  readonly switchTheme = output<void>();

  protected onToggleMenu(): void {
    this.toggleMenu.emit();
  }

  protected onSwitchLayout(): void {
    this.switchLayout.emit();
  }

  protected onSwitchTheme(): void {
    this.switchTheme.emit();
  }
}
