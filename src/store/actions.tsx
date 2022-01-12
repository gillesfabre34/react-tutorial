import { Product } from '../models/product';
import { store } from './store';

export const ADD_PRODUCT = 'products/add';
export const REMOVE_PRODUCT = 'products/remove';
export const CREATE_PRODUCT = 'products/create';
export const PRODUCT_ALREADY_EXISTS = 'products/alreadyExists';
export const USERS_LOADED = 'users';

export const addProduct = () => {
	return {type: ADD_PRODUCT, payload: store.getState()}
}

export const removeProduct = () => {
	return {type: REMOVE_PRODUCT, payload: {}}
}

export const createProduct = (product: Product) => {
	return {type: CREATE_PRODUCT, payload: {products: store.getState().products, product}}
}

// export const getUsers = async (dispatch, getState) => {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	const json = await response.json();
// 	console.log("RESPONSEEE", json);
// 	console.log("RESPONSEEE stateee", getState());
// 	dispatch({type: USERS_LOADED, payload: json});
// 	console.log("RESPONSEEE stateee 2", getState());
// }

export const getUsers = () => {
	console.log("GET USERSSS");
	return async function (dispatch) {
		return fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(json => {
				console.log("RESPONSEEE", json);
				dispatch({type: USERS_LOADED, payload: json});
			})
	}
}
