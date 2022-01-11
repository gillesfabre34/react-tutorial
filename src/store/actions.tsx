import { Product } from '../models/product';
import { PRODUCTS } from '../data/products';
import { store } from './store';

export const ADD_PRODUCT = 'products/add';
export const REMOVE_PRODUCT = 'products/remove';
export const CREATE_PRODUCT = 'products/create';

export const addProduct = () => {
	console.log("ADD PRODUCTSSS store", store.getState())
	return {type: ADD_PRODUCT, payload: store.getState()}
}

export const removeProduct = () => {
	return {type: REMOVE_PRODUCT, payload: {}}
}

export const createProduct = (product: Product) => {
	const products: Product[] = [...PRODUCTS.concat(product)];
	console.log("PRODUCTSSS", products)
	console.log("PRODUCTSSS store", store.getState())
	return {type: CREATE_PRODUCT, payload: products}
}
