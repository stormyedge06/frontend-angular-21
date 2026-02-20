import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./modules/main/main.routes').then((m) => m.mainRoutes),
	},
];
