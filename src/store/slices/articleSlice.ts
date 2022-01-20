import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const articleSlice = createSlice({
	name: 'article',
	initialState: {
		nbArticles: 0,
	},
	reducers: {
		add: (state, action) => {
			return {...state, nbArticles: state.nbArticles + 1};
		}
	}
})

export const selectNbArticles = (state: RootState) => state.articleReducer.nbArticles;

export const { add } = articleSlice.actions;
export const articleReducer = articleSlice.reducer;
