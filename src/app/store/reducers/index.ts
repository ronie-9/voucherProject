import { isDevMode } from '@angular/core';
import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer,
} from '@ngrx/store';
import * as fromVoucher from './voucher.reducer';
import * as fromUser from './user.reducer';

export interface State {
	voucher: fromVoucher.VoucherState;
	user: fromUser.UserState;
}

export const reducers: ActionReducerMap<State> = {
	voucher: fromVoucher.reducer,
	user: fromUser.reducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

export const initialState: State = {
	voucher: fromVoucher.initialState,
	user: fromUser.initialState,
};
