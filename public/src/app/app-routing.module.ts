import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateUsersComponent } from './create-users/create-users.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: WelcomeComponent
	}, 
	{
		path: 'welcome',
		component: WelcomeComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}