import React from 'react';
import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';

const reducer = combineReducers({
		counterReducer: counterReducer
	}
)
