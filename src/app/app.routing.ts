import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "./core/components/header/header.component";

const routes: Routes = [
	{
		path: "", component: HeaderComponent
	}
]
export const routing = RouterModule.forRoot(routes);