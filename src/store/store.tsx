import React from 'react';
import { createStore } from '@reduxjs/toolkit';
import { appReducer } from './appReducer';

export const store = createStore(appReducer, {count: 12});
