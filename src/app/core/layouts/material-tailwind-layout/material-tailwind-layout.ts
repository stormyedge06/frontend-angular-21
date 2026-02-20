import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterTailwind } from '../../components/footer-tailwind/footer-tailwind';
import { HeaderTailwind } from '../../components/header-tailwind/header-tailwind';

@Component({
  selector: 'app-material-tailwind-layout',
  imports: [MatToolbarModule, MatButtonModule, MatCardModule, HeaderTailwind, FooterTailwind],
  templateUrl: './material-tailwind-layout.html',
  styleUrl: './material-tailwind-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTailwindLayout {
  readonly name = input('Tu Nombre');
  readonly role = input('Frontend Developer');
  readonly switchLayout = output<void>();

  protected onSwitchLayout(): void {
    this.switchLayout.emit();
  }
}
