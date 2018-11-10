import { AuthGuardService } from './core/services/auth-guard.service';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';

import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "", component: HomeComponent, canActivate: [ AuthGuardService ]
	},
	{
		path: "login", component: LoginComponent
	}
]
export const routing = RouterModule.forRoot(routes);