import { ADD_PRODUCT, CREATE_PRODUCT, PRODUCT_ALREADY_EXISTS, REMOVE_PRODUCT, USERS_LOADED } from './actions';
import { Product } from '../models/product';
import { store } from './store';

export const appReducer = (state, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {...state, nbArticles: state.nbArticles + 1};
		case REMOVE_PRODUCT:
			const nbArticles = state.nbArticles > 0 ? state.nbArticles - 1 : 0;
			return {...state, nbArticles};
		case CREATE_PRODUCT:
			const products: Product[] = action.payload.products.concat(action.payload.product);
			return {...state, products};
		case PRODUCT_ALREADY_EXISTS:
			console.log("Error : ", action)
			return state;
		case USERS_LOADED:
			console.log("LOADED", action.payload);
			return {...state, users: action.payload};
		default:
			return state;
	}
}
