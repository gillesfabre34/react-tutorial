import { ADD_PRODUCT, CREATE_PRODUCT, REMOVE_PRODUCT } from './actions';
import { Product } from '../models/product';

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
		default:
			return state;
	}
}
