import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions';


export const appReducer = (state, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {nbProducts: state.nbProducts + 1};
		case REMOVE_PRODUCT:
			const nbProducts = state.nbProducts > 0 ? state.nbProducts - 1 : 0;
			return {nbProducts: nbProducts};
		default:
			return state;
	}
}
