import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CounterProductsState {
	nbProducts: number;
}

const initialState: CounterProductsState = {
	nbProducts: 0,
}

export const productSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		add: (state, action) => {
			return {...state, nbProducts: state.nbProducts + 1};
		},
		remove: (state, action) => {
			console.log('REMOVE', state.nbProducts)
			const nbProducts = state.nbProducts > 0 ? state.nbProducts - 1 : 0;
			return {...state, nbProducts};
		},
	}
})

export const selectNbArticles = (state: RootState) => state.articleReducer.nbProducts;

// export const [addProduct, removeProduct] = productSlice.actions;
export const productReducer = productSlice.reducer;
