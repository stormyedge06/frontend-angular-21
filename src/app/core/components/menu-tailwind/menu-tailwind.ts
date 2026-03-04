import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-menu-tailwind',
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './menu-tailwind.html',
  styleUrl: './menu-tailwind.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TailwindMenuComponent {}
