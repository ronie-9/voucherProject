import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadVenues, purchaseVoucher } from '../../store/actions/voucher.actions';
import { VoucherState } from '../../store/reducers/voucher.reducer';
import { UserState } from '../../store/reducers/user.reducer';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss'],
})
export class VoucherComponent implements OnInit {
	voucher: any;

	constructor(private store: Store<{ voucher: VoucherState; user: UserState }>) {}

	ngOnInit(): void {
		this.store.dispatch(loadVenues());

		this.store.select('voucher').subscribe((voucherState) => {
			this.voucher = voucherState;
		});
	}

	purchaseVoucher(): void {
		this.store.dispatch(purchaseVoucher());
	}
}
