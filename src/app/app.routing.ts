import { HomeComponent } from './core/components/home/home.component';

import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "", component: HomeComponent
	}
]
export const routing = RouterModule.forRoot(routes);