import { ADD_PRODUCT, CREATE_PRODUCT, REMOVE_PRODUCT } from './actions';

export const appReducer = (state, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {...state, nbArticles: state.nbArticles + 1};
		case REMOVE_PRODUCT:
			const nbArticles = state.nbArticles > 0 ? state.nbArticles - 1 : 0;
			return {...state, nbArticles};
		case CREATE_PRODUCT:
			return {...state, products: action.payload};
		default:
			return state;
	}
}
