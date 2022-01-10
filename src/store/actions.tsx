export const ADD_PRODUCTS = 'products/add';

export const addProducts = (payload) => {
	console.log('PAYLOADDDD', payload)
	return {type: ADD_PRODUCTS, payload}
}
