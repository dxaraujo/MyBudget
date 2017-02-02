import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './components/layout/full-layout.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: '',
		component: FullLayoutComponent,
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