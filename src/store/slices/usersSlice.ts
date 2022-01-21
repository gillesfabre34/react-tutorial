import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../components/users';
import { RootState } from '../store';
import { GET_USERS } from '../actions';

export interface UsersState {
	users: User[];
}

const initialState: UsersState = {
	users: [],
}

const getUsersThunk = async (data: any) => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	return await response.json();
}

export const getUsers = createAsyncThunk(GET_USERS, getUsersThunk);

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getUsers.fulfilled, (state: any, action) => {
			console.log("EXTRA action", action);
			state.users = action.payload;
		})
	}
})

export const selectUsers = (state: RootState) => state.usersReducer.users;

export const usersReducer = usersSlice.reducer;
