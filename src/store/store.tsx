import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { formValidatorMiddleware } from './middlewares/formValidator';
import thunk from 'redux-thunk';
import { productsReducer } from './slices/productsSlice';
import { productReducer } from './slices/productSlice';

const reducer = combineReducers({
	productReducer: productsReducer,
	articleReducer: productReducer
})

export const store = configureStore({
	reducer,
	middleware: [thunk, formValidatorMiddleware]
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
