import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import('./main/main').then((m) => m.Main),
	},
];
