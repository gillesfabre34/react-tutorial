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
		}
	}
})

export const selectNbArticles = (state: RootState) => state.articleReducer.nbProducts;

export const { add } = productSlice.actions;
export const productReducer = productSlice.reducer;
