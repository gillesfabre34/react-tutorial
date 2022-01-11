import { Product } from '../../models/product';
import { CREATE_PRODUCT, PRODUCT_ALREADY_EXISTS } from '../actions';

function productAlreadyExists(products: Product[], newProduct: Product): boolean {
	return products.map(p => p.name).includes(newProduct.name);
}

export const formValidatorMiddleware = ({dispatch}) => {
	return function (next) {
		return function (action) {
			// console.log('MDLWWWW', action)
			if (action.type === CREATE_PRODUCT) {
				if (!action.payload.product?.name || productAlreadyExists(action.payload.products, action.payload.product)) {
					console.log("INCORRECT NAME", action.payload.product);
					return dispatch({type: PRODUCT_ALREADY_EXISTS})
				}
			}
			return next(action);
		}
	}
}
