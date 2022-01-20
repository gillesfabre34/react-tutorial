import { createSlice } from '@reduxjs/toolkit';

const articleSlice = createSlice({
	name: 'article',
	initialState: {
		nbArticles: 0,
	},
	reducers: {
		add: (state, actions) => {
			return {...state, nbArticles: state.nbArticles + 1};
		}
	}
})

export const { add } = articleSlice.actions;
export const articleReducer = articleSlice.reducer;
