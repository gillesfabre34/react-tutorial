import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { appReducer } from './reducers/appReducer';
import { PRODUCTS } from '../data/products';
import { Product } from '../models/product';
import { formValidatorMiddleware } from './middlewares/formValidator';
import thunk from 'redux-thunk';
// import { User } from '../components/users';
import { productsReducer } from './slices/productsSlice';
import { productReducer } from './slices/productSlice';

// export interface RootState {
// 	nbProducts: number,
// 	products: Product[],
// 	// users: User[]
// }

// const initialState: RootState = {
// 	nbProducts: 0,
// 	products: PRODUCTS,
// 	// users: []
// }

const reducer = combineReducers({
	productReducer: productsReducer,
	articleReducer: productReducer
})

export const store = configureStore({
	// preloadedState: initialState,
	reducer,
	middleware: [thunk, formValidatorMiddleware]
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
