import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: '',
		data: {
			title: 'Home'
		},
		children: [{
			path: 'dashboard',
			loadChildren: './views/dashboard/dashboard.module#DashboardModule'
		}]
	},
	{
		path: '**',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }