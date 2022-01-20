import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface CounterProductsState {
	nbProducts: number;
}

const initialState: CounterProductsState = {
	nbProducts: 0,
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			return {...state, nbProducts: state.nbProducts + 1};
		},
		removeProduct: (state, action) => {
			const nbProducts = state.nbProducts > 0 ? state.nbProducts - 1 : 0;
			return {...state, nbProducts};
		},
	}
})

export const selectNbProducts = (state: RootState) => state.articleReducer.nbProducts;

export const {addProduct, removeProduct} = productSlice.actions;
export const productReducer = productSlice.reducer;
