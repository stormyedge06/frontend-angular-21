import { ChangeDetectionStrategy, Component, OnDestroy, effect, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu-design',
  imports: [MatButtonModule],
  templateUrl: './menu-design.html',
  styleUrl: './menu-design.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-open]': 'menuOpen()',
    '[class.is-closing]': 'isClosing()',
  },
})
export class MenuDesign implements OnDestroy {
  readonly menuOpen = input(false);
  protected readonly isClosing = signal(false);
  private hasBeenOpened = false;
  private closeTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    effect(() => {
      if (this.menuOpen()) {
        this.hasBeenOpened = true;
        clearTimeout(this.closeTimer);
        this.isClosing.set(false);
      } else if (this.hasBeenOpened) {
        this.isClosing.set(true);
        this.closeTimer = setTimeout(() => this.isClosing.set(false), 760);
      }
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.closeTimer);
  }
}
