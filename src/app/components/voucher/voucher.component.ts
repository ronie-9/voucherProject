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
	countdown: string = "";

	constructor(private store: Store<{ voucher: VoucherState }>) {}

	ngOnInit(): void {
		this.store.dispatch(loadVenues());

		this.store.select('voucher').subscribe((voucherState) => {
			this.voucher = voucherState;
			if (this.voucher.voucherData && this.voucher.voucherData.expiresAt) {
				this.startCountdown(this.voucher.voucherData.expiresAt);
			}
		});
	}

	purchaseVoucher(): void {
		this.store.dispatch(purchaseVoucher());
	}

	startCountdown(expiresAt: string): void {
		/* mocking Date in the future
		const today = new Date();
		const tomorrow = today.setDate(today.getDate() + 1);
		const endTime = new Date(tomorrow).getTime();
		*/
		
		const endTime = new Date(expiresAt).getTime();
		const interval = setInterval(() => {
			const currentTime = new Date().getTime();
			const timeRemaining = endTime - currentTime;

			if (timeRemaining > 0) {
				this.countdown = this.formatTimeRemaining(timeRemaining);
			} else {
				this.countdown = "Expired";
				clearInterval(interval);
			}
		}, 1000);
	}

	formatTimeRemaining(timeRemaining: number): string {
		const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
		const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

		return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
	}
}
