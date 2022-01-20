export const CREATE_PRODUCT = 'products/createProduct';
export const WRONG_DATA = 'products/wrongProductData';
export const PRODUCT_ALREADY_EXISTS = 'products/productAlreadyExists';
export const USERS_LOADED = 'users';

export const getUsers = async (dispatch) => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const json = await response.json();
	dispatch({type: USERS_LOADED, payload: json});
}
