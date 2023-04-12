import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as UserActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
	logIn$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserActions.logIn),
			map(() => UserActions.logInSuccess({ loggedIn: true, email: '' }))
		)
	);

	constructor(private actions$: Actions) {}
}
