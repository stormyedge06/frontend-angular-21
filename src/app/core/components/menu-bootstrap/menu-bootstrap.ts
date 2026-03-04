import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-menu-bootstrap',
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './menu-bootstrap.html',
  styleUrl: './menu-bootstrap.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBootstrap {}
