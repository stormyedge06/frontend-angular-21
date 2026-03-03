import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterTailwind } from '../../components/footer-tailwind/footer-tailwind';
import { HeaderTailwind } from '../../components/header-tailwind/header-tailwind';
import type { LayoutMode, ThemeMode } from '../../models/layout-mode.type';

@Component({
  selector: 'app-material-tailwind-layout',
  imports: [MatToolbarModule, MatButtonModule, HeaderTailwind, FooterTailwind],
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

  protected onSwitchLayout(): void {
    this.switchLayout.emit();
  }

  protected onSwitchTheme(): void {
    this.switchTheme.emit();
  }
}
