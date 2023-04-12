import { Action } from '@ngrx/store';

export interface AppState {
    locations : Array<ILocation>;
}

export interface ILocation {
    name: string,
    address: string,
    opening_hours: string
}
export interface Locations {
    record: object,
    metadata: object,
}

export const ACTIONS = {
    LOCATIONS_LOADED: 'LOCATIONS_LOADED',
}

interface LocationsAction extends Action {
    payload: Array<ILocation>;
}

export function locationsReducer(
    state: Array<ILocation> = [],
    action: LocationsAction): Array<ILocation> {
    switch (action.type) {
        case ACTIONS.LOCATIONS_LOADED:
            // Return the new state with the payload as locations list
            return Array.prototype.concat(action.payload);
        default:
            return state;
    }
}