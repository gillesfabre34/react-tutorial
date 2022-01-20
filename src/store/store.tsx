import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { appReducer } from './reducers/appReducer';
import { PRODUCTS } from '../data/products';
import { Product } from '../models/product';
import { formValidatorMiddleware } from './middlewares/formValidator';
import thunk from 'redux-thunk';
// import { User } from '../components/users';
import { productReducer } from './slices/productsSlice';

// export interface RootState {
// 	nbArticles: number,
// 	products: Product[],
// 	// users: User[]
// }

// const initialState: RootState = {
// 	nbArticles: 0,
// 	products: PRODUCTS,
// 	// users: []
// }

const reducer = combineReducers({
	productReducer: productReducer
})

export const store = configureStore({
	// preloadedState: initialState,
	reducer,
	middleware: [thunk, formValidatorMiddleware]
});

export type RootState = ReturnType<typeof reducer>;
