import { ADD_PRODUCTS } from './actions';

export const appReducer = (state, action) => {
	switch (action.type) {
		case ADD_PRODUCTS:
			const nbProducts = state.nbProducts || 0;
			console.log('REDUCERRRR', state.nbProducts, action.payload)
			return {nbProducts: nbProducts + action.payload};
		default:
			return state;
	}
}
