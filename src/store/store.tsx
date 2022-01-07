import React from 'react';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';

const reducer = combineReducers({
		counterReducer: counterReducer
	}
)

export const store = createStore(counterReducer);
