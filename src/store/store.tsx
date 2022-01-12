import React from 'react';
import { applyMiddleware, compose, configureStore, createStore } from '@reduxjs/toolkit';
import { appReducer } from './appReducer';
import { PRODUCTS } from '../data/products';
import { Product } from '../models/product';
import { formValidatorMiddleware } from './middlewares/formValidator';
import thunk from 'redux-thunk';

export interface RootState {
	nbArticles: number,
	products: Product[]
}
const initialState: RootState = {
	nbArticles: 0,
	products: PRODUCTS
}

export const store = configureStore({
	preloadedState: initialState,
	reducer: appReducer,
	middleware: [thunk, formValidatorMiddleware]
});

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// export const store = createStore(
// 	appReducer,
// 	initialState,
// 	storeEnhancers(applyMiddleware(formValidatorMiddleware, thunk)),
// );
