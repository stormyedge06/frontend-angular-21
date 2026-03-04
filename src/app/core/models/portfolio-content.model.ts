import type { ProjectCardData } from '../../shared/components/project-card/project-card.model';

export type PortfolioProfile = {
  name: string;
  role: string;
  about: string;
  email: string;
  location: string;
  availability: string;
};

export type PortfolioText = {
  heroProjectsCta: string;
  heroContactCta: string;
  aboutTitle: string;
  skillsTitle: string;
  projectsTitle: string;
  contactTitle: string;
  contactPrefix: string;
  contactSuffix: string;
};

export type PortfolioContent = {
  profile: PortfolioProfile;
  skills: string[];
  projects: ProjectCardData[];
};

export const DEFAULT_PORTFOLIO_TEXT: PortfolioText = {
  heroProjectsCta: 'Ver proyectos',
  heroContactCta: 'Contactar',
  aboutTitle: 'Sobre mí',
  skillsTitle: 'Tecnologías',
  projectsTitle: 'Proyectos',
  contactTitle: 'Contacto',
  contactPrefix: 'Escríbeme a',
  contactSuffix: 'para colaborar en tu próximo proyecto.',
};

export const PORTFOLIO_CONTENT: PortfolioContent = {
  profile: {
    name: 'Braian Oscar Loza Quiroga',
    role: 'Frontend Developer',
    about: 'Construyo interfaces web rápidas, accesibles y mantenibles con Angular y TypeScript.',
    email: 'tu-email@dominio.com',
    location: 'Tu ciudad, tu país',
    availability: 'Disponible para proyectos freelance y posiciones full-time.',
  },
  skills: ['Angular', 'TypeScript', 'RxJS', 'HTML semántico', 'CSS responsive', 'Testing'],
  projects: [
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
  ],
};
