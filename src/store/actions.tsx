import { Product } from '../models/product';
import { PRODUCTS } from '../data/products';

export const ADD_PRODUCT = 'products/add';
export const REMOVE_PRODUCT = 'products/remove';
export const CREATE_PRODUCT = 'products/create';

export const addProduct = () => {
	return {type: ADD_PRODUCT, payload: {}}
}

export const removeProduct = () => {
	return {type: REMOVE_PRODUCT, payload: {}}
}

export const createProduct = (product: Product) => {
	console.log("CREATEEEE", product)
	const products: Product[] = [...PRODUCTS.concat(product)];
	return {type: CREATE_PRODUCT, payload: products}
}
