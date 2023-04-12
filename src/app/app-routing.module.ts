import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationListComponent } from './components/location-list/location-list.component';

const routes: Routes = [
	{ path: 'main', component: LocationListComponent },
 	{ path: '', redirectTo: '/main', pathMatch: 'full' },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
