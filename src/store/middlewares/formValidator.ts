import { Product } from '../../models/product';
import { CREATE_PRODUCT, PRODUCT_ALREADY_EXISTS, WRONG_DATA } from '../actions';

function productAlreadyExists(products: Product[], newProduct: Product): boolean {
	return products.map(p => p.name).includes(newProduct.name);
}

export const formValidatorMiddleware = ({getState, dispatch}) => {
	return function (next) {
		return function (action) {
			if (action.type === CREATE_PRODUCT) {
				if (!action.payload?.name) {
					return dispatch({type: WRONG_DATA, payload: action.payload})
				}
				if (productAlreadyExists(getState().productReducer.products, action.payload)) {
					return dispatch({type: PRODUCT_ALREADY_EXISTS, payload: action.payload})
				}
			}
			return next(action);
		}
	}
}
