import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { MaterialBootstrapLayout } from '../../../core/layouts/material-bootstrap-layout/material-bootstrap-layout';
import { MaterialTailwindLayout } from '../../../core/layouts/material-tailwind-layout/material-tailwind-layout';
import type { LayoutMode, ThemeMode } from '../../../core/models/layout-mode.type';
import {
  DEFAULT_PORTFOLIO_TEXT,
  PORTFOLIO_CONTENT,
  type PortfolioText,
} from '../../../core/models/portfolio-content.model';
import { ProjectCard } from '../../../shared/components/project-card/project-card';

type PortfolioI18nPayload = {
  portfolio?: {
    text?: Partial<PortfolioText>;
  };
};

@Component({
  selector: 'app-main',
  imports: [MaterialTailwindLayout, MaterialBootstrapLayout, ProjectCard],
  templateUrl: './main.html',
  styleUrl: './main.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly layoutStorageKey = 'portfolio-layout-mode';
  private readonly themeStorageKey = 'portfolio-theme-mode';

  protected readonly layoutMode = signal<LayoutMode>('bootstrap');
  protected readonly themeMode = signal<ThemeMode>('light');

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const savedLayout = localStorage.getItem(this.layoutStorageKey);
    if (savedLayout === 'bootstrap' || savedLayout === 'tailwind') {
      this.layoutMode.set(savedLayout);
    }

    const savedTheme = localStorage.getItem(this.themeStorageKey);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.themeMode.set(savedTheme);
    }

    this.applyThemeMode();

    void this.loadTextsFromEsJson();
  }

  protected toggleLayout(): void {
    this.layoutMode.update((current) => (current === 'bootstrap' ? 'tailwind' : 'bootstrap'));

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(this.layoutStorageKey, this.layoutMode());
  }

  protected toggleTheme(): void {
    this.themeMode.update((current) => (current === 'light' ? 'dark' : 'light'));

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.applyThemeMode();
    localStorage.setItem(this.themeStorageKey, this.themeMode());
  }

  protected readonly profile = signal(PORTFOLIO_CONTENT.profile);
  protected readonly skills = signal(PORTFOLIO_CONTENT.skills);
  protected readonly projects = signal(PORTFOLIO_CONTENT.projects);
  protected readonly text = signal(DEFAULT_PORTFOLIO_TEXT);

  private async loadTextsFromEsJson(): Promise<void> {
    try {
      const response = await fetch('/i18n/es.json');
      if (!response.ok) {
        return;
      }

      const payload = (await response.json()) as PortfolioI18nPayload;
      const translatedText = payload.portfolio?.text;
      if (!translatedText) {
        return;
      }

      this.text.update((current) => ({
        ...current,
        ...translatedText,
      }));
    } catch {
      return;
    }
  }

  private applyThemeMode(): void {
    this.document.body.setAttribute('data-theme', this.themeMode());
    this.document.body.style.colorScheme = this.themeMode();
  }
}
