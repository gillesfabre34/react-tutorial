import {
	ADD_PRODUCT,
	CREATE_PRODUCT,
	WRONG_DATA,
	PRODUCT_ALREADY_EXISTS,
	REMOVE_PRODUCT,
	USERS_LOADED
} from './actions';
import { Product } from '../models/product';

export const appReducer = (state, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {...state, nbArticles: state.nbArticles + 1};
		case REMOVE_PRODUCT:
			const nbArticles = state.nbArticles > 0 ? state.nbArticles - 1 : 0;
			return {...state, nbArticles};
		case CREATE_PRODUCT:
			const products: Product[] = state.products.concat(action.payload);
			return {...state, products};
		case WRONG_DATA:
			console.log("Error : incorrect data", action.payload);
			return state;
		case PRODUCT_ALREADY_EXISTS:
			console.log("Error : product already exists", action.payload);
			return state;
		case USERS_LOADED:
			return {...state, users: action.payload};
		default:
			return state;
	}
}
