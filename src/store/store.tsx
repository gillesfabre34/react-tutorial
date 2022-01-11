import React from 'react';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { appReducer } from './appReducer';
import { PRODUCTS } from '../data/products';
import { Product } from '../models/product';
import { formValidatorMiddleware } from './middlewares/formValidator';

export interface RootState {
	nbArticles: number,
	products: Product[]
}
const initialState: RootState = {
	nbArticles: 0,
	products: PRODUCTS
}

export const store = createStore(
	appReducer,
	initialState,
	applyMiddleware(formValidatorMiddleware),
);
