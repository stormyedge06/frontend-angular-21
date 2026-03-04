import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import type { LayoutMode, ThemeMode } from '../../models/layout-mode.type';

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
  readonly menuOpen = input(false);
  readonly layoutMode = input<LayoutMode>('tailwind');
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
