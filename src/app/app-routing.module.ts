import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoucherComponent } from './components/voucher/voucher.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
	{ path: '', redirectTo: '/voucher', pathMatch: 'full' },
	{ path: 'voucher', component: VoucherComponent, canActivate: [AuthGuard] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
