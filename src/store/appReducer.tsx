import { ADD_PRODUCT } from './actions';

export const appReducer = (state, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			const nbProducts = state.nbProducts || 0;
			return {nbProducts: nbProducts + 1};
		default:
			return state;
	}
}
