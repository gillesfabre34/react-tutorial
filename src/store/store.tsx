import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './appReducer';
import { PRODUCTS } from '../data/products';
import { Product } from '../models/product';
import { formValidatorMiddleware } from './middlewares/formValidator';
import thunk from 'redux-thunk';
import { User } from '../components/users';

export interface RootState {
	nbArticles: number,
	products: Product[],
	users: User[]
}

const initialState: RootState = {
	nbArticles: 0,
	products: PRODUCTS,
	users: []
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
