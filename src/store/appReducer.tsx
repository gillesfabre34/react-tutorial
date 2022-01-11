import { ADD_PRODUCT, CREATE_PRODUCT, REMOVE_PRODUCT } from './actions';

export const appReducer = (state, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {nbArticles: state.nbArticles + 1};
		case REMOVE_PRODUCT:
			const nbArticles = state.nbArticles > 0 ? state.nbArticles - 1 : 0;
			return {nbArticles};
		case CREATE_PRODUCT:
			console.log("APP REDUCER CREATE, stat", state, action.payload)
			return {products: action.payload};
		default:
			return state;
	}
}
