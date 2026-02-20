import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { MaterialBootstrapLayout } from '../../../core/layouts/material-bootstrap-layout/material-bootstrap-layout';
import { MaterialTailwindLayout } from '../../../core/layouts/material-tailwind-layout/material-tailwind-layout';
import type { LayoutMode } from '../../../core/models/layout-mode.type';
import { ProjectCard } from '../../../shared/components/project-card/project-card';
import type { ProjectCardData } from '../../../shared/components/project-card/project-card.model';

@Component({
  selector: 'app-main',
  imports: [MaterialTailwindLayout, MaterialBootstrapLayout, ProjectCard],
  templateUrl: './main.html',
  styleUrl: './main.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'portfolio-layout-mode';

  protected readonly layoutMode = signal<LayoutMode>('bootstrap');

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const savedLayout = localStorage.getItem(this.storageKey);
    if (savedLayout === 'bootstrap' || savedLayout === 'tailwind') {
      this.layoutMode.set(savedLayout);
    }
  }

  protected toggleLayout(): void {
    this.layoutMode.update((current) => (current === 'bootstrap' ? 'tailwind' : 'bootstrap'));

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(this.storageKey, this.layoutMode());
  }

  protected readonly profile = signal({
    name: 'Tu Nombre',
    role: 'Frontend Developer',
    about:
      'Construyo interfaces web rápidas, accesibles y mantenibles con Angular y TypeScript.',
    email: 'tu-email@dominio.com',
    location: 'Tu ciudad, tu país',
    availability: 'Disponible para proyectos freelance y posiciones full-time.',
  });

  protected readonly skills = signal([
    'Angular',
    'TypeScript',
    'RxJS',
    'HTML semántico',
    'CSS responsive',
    'Testing',
  ]);

  protected readonly projects = signal<ProjectCardData[]>([
    {
      name: 'Proyecto 1',
      summary: 'Aplicación web para gestionar tareas con autenticación y panel de métricas.',
      stack: ['Angular', 'TypeScript', 'Node.js'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      name: 'Proyecto 2',
      summary: 'Landing optimizada para conversión con formularios y contenido dinámico.',
      stack: ['Angular', 'SSR', 'SCSS'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      name: 'Proyecto 3',
      summary: 'Dashboard de analítica con filtros, tablas y visualización de indicadores.',
      stack: ['Angular', 'Signals', 'REST API'],
      demoUrl: '#',
      repoUrl: '#',
    },
  ]);

}
