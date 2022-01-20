import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../components/users';
import { RootState } from '../store';

export interface UsersState {
	users: User[];
}

const initialState: UsersState = {
	users: [],
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getUsers: (state, action) => {
			return {...state, users: []};
		}
	}
})

export const selectUsers = (state: RootState) => state.usersReducer.users;

export const { getUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
