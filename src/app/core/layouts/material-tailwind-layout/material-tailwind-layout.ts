import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { FooterTailwind } from '../../components/footer-tailwind/footer-tailwind';
import { HeaderTailwind } from '../../components/header-tailwind/header-tailwind';
import { TailwindMenuComponent } from '../../components/menu-tailwind/menu-tailwind';
import type { LayoutMode, ThemeMode } from '../../models/layout-mode.type';

@Component({
  selector: 'app-material-tailwind-layout',
  imports: [HeaderTailwind, FooterTailwind, TailwindMenuComponent],
  templateUrl: './material-tailwind-layout.html',
  styleUrl: './material-tailwind-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTailwindLayout {
  readonly name = input('Tu Nombre');
  readonly role = input('Frontend Developer');
  readonly layoutMode = input<LayoutMode>('tailwind');
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
