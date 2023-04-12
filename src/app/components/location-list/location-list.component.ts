import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, ILocation, ACTIONS } from '../../store/locations.reducer';
import * as Rx from 'rxjs';
import { ApiserviceService } from '../../services/apiservice.service';

@Component({
	selector: 'app-location-list',
	templateUrl: './location-list.component.html',
	styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
	public locations: any[];

	constructor(private apiService: ApiserviceService) {
		this.locations = [];
	}

	ngOnInit() {
		this.apiService.getLocations().subscribe((venues) => {
			this.locations = venues;
		});
	}
}