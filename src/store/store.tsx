import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { formValidatorMiddleware } from './middlewares/formValidator';
import thunk from 'redux-thunk';
import { productsReducer } from './slices/productsSlice';
import { productReducer } from './slices/productSlice';
import { usersReducer } from './slices/usersSlice';

const reducer = combineReducers({
	productReducer: productsReducer,
	articleReducer: productReducer,
	usersReducer: usersReducer,
})

export const store = configureStore({
	reducer,
	middleware: [thunk, formValidatorMiddleware]
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
