import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../components/users';
import { RootState } from '../store';
import { GET_USERS } from '../actions';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface UsersState {
	users: User[];
}

const initialState: UsersState = {
	users: [],
}

// -----------------------------------   RTK Query training   -------------------------------

// export const usersApi = createApi({
// 	reducerPath: "usersApi",
// 	baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/"}),
// 	endpoints: builder => ({
// 		getUsers: builder.query<User[], any>({
// 			query: () => 'users',
// 		})
// 	})
// });
//
// export const { useGetUsersQuery } = usersApi;

// --------------------------------   End of RTK Query training   -------------------------------

const getUsersThunk = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	return await response.json();
}

export const getUsers = createAsyncThunk(GET_USERS, getUsersThunk);

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getUsers: (state, action) => {
			state.users = action.payload;
		}
	},
// -----------------------------------   RTK Query training   -------------------------------
// 	extraReducers: builder => {
// 		builder.addCase(getUsers.fulfilled, (state: any, action) => {
// 			state.users = action.payload;
// 		})
// 	}
// --------------------------------   End of RTK Query training   -------------------------------
});

export const selectUsers = (state: RootState) => state.usersReducer.users;

export const usersReducer = usersSlice.reducer;
