import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../models/product';
import { RootState } from '../store';

const productsSlice = createSlice({
	name: 'product',
	initialState: {
		products: PRODUCTS,
	},
	reducers: {
		createProduct: (state, action) => {
			const products: Product[] = state.products.concat(action.payload);
			return {...state, products};
		},
		wrongProductData: (state, action) => {
			console.log("Error : incorrect data", action.payload);
			return state;
		},
	}
})

export const selectProducts = (state: RootState) => state.productReducer.products;

export const { createProduct, wrongProductData } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
