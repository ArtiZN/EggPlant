import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';

import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "", component: HomeComponent
	},
	{
		path: "login", component: LoginComponent
	}
]
export const routing = RouterModule.forRoot(routes);