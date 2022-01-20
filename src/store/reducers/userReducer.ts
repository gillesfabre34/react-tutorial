// import { USERS_LOADED } from '../actions';
//
import { USERS_LOADED } from '../actions';

export const userReducer = (state, action) => {
	switch (action.type) {
		case USERS_LOADED:
			return {...state, users: action.payload};
		default:
			return state;
	}
}
