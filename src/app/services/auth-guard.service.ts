import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { VoucherState } from '../store/reducers/voucher.reducer';
import { UserState } from '../store/reducers/user.reducer';

@Injectable({
  	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(private store: Store<{ voucher: VoucherState; user: UserState }>) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.store.select('user').pipe(
			take(1),
			map((userState: UserState) => {
				if (userState.loggedIn) {
					return true;
				} else {
					// If not logged in, you can navigate to a login page or show a message
					// this.router.navigate(['/login']);
					console.log('User not logged in');
					return false;
				}
			})
		);
	}
}
