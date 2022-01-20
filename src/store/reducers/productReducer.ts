import { ADD_PRODUCT, CREATE_PRODUCT, PRODUCT_ALREADY_EXISTS, REMOVE_PRODUCT, WRONG_DATA } from '../actions';
import { Product } from '../../models/product';

export const productReducer = (state, action) => {
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
		default:
			return state;
	}
}
