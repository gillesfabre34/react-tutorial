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
	// [usersApi.reducerPath]: usersApi.reducer,
})

export const store = configureStore({
	reducer,
	middleware: [thunk, formValidatorMiddleware]
	// middleware: [thunk, formValidatorMiddleware, usersApi.middleware]
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
