import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logIn } from './store/actions/user.actions';
import { VoucherState } from './store/reducers/voucher.reducer';
import { UserState } from './store/reducers/user.reducer';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'VoucherApp';

	constructor(private store: Store<{ voucher: VoucherState; user: UserState }>) {}

	ngOnInit() {
		// Simulate a user login by dispatching the logIn action
		this.store.dispatch(logIn());
	}
}
