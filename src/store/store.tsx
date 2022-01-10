import React from 'react';
import { createStore } from '@reduxjs/toolkit';
import { appReducer } from './appReducer';

const initialState = {
	nbProducts: 0
}

export const store = createStore(appReducer, initialState);
