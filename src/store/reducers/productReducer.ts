import { CREATE_PRODUCT, PRODUCT_ALREADY_EXISTS } from '../actions';
import { Product } from '../../models/product';

export const productsReducer = (state, action) => {
	switch (action.type) {
		// case ADD_PRODUCT:
		// 	return {...state, nbProducts: state.nbProducts + 1};
		// case REMOVE_PRODUCT:
		// 	const nbProducts = state.nbProducts > 0 ? state.nbProducts - 1 : 0;
		// 	return {...state, nbProducts};
		case CREATE_PRODUCT:
			const products: Product[] = state.products.concat(action.payload);
			return {...state, products};
		// case WRONG_DATA:
		// 	console.log("Error : incorrect data", action.payload);
		// 	return state;
		case PRODUCT_ALREADY_EXISTS:
			console.log("Error : product already exists", action.payload);
			return state;
		default:
			return state;
	}
}
