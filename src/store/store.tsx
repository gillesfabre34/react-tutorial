import React from 'react';
import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const appReducer = combineReducers({
		counterReducer: counterReducer
	}
)

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// export const store = createStore(counterReducer, composedEnhancer);
export const store = createStore(counterReducer, {count: 12});
