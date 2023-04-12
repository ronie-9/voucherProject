import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, ILocation, ACTIONS, Locations } from '../store/locations.reducer';
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
 	providedIn: 'root'
})
export class ApiserviceService {

	private USER_API_URL = 'https://api.jsonbin.io/v3';

	constructor(private http: HttpClient) {}

	getLocations(): Observable<ILocation[]> {
		const endPoint = '/b/631aee46a1610e63862444c0';
		const headers = new HttpHeaders().set('X-Master-Key', '$2b$10$5eRbA9CLdvKK/tsB5BCKle8W9Hi1sAkzEUwFpobWnEbg8bPiY2BK6');
		return this.http.get(`${this.USER_API_URL}`+ endPoint, { headers }).pipe(
			map((response: any) => response.record.venues)
		);
	}

}
