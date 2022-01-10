export const ADD_PRODUCT = 'products/add';
export const REMOVE_PRODUCT = 'products/remove';

export const addProduct = () => {
	return {type: ADD_PRODUCT, payload: {}}
}

export const removeProduct = () => {
	return {type: REMOVE_PRODUCT, payload: {}}
}
