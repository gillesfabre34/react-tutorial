import React, { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addProduct, getUsers, removeProduct } from '../store/actions';
import { RootState, store } from '../store/store';

export interface User {
	id: string,
	name: string,
	username: string,
	email: string,
	address: object,
	phone: string,
	website: string,
	company: object
}
const Users: React.FC<{getUsers: any}> = ({getUsers}) => {
// const Users: React.FC<{ users: User[] }> = ({users}) => {
// export const Users: React.FC<User> = (props: PropsWithChildren<User>) => {
	let rows: ReactElement[] = [];
	const dispatch = useDispatch();
	// console.log("USERSSSS", users)
	const [usersList, setUsers] = useState([]);
	const usrs = useSelector((state: RootState) => state.users);
	// dispatch(getUsers());
	// getUsers();

	useEffect( () => {
		console.log("mounted")
		dispatch(getUsers());
		console.log("after dispatch ?", store.getState())
	}, [dispatch, getUsers])
	// }, [dispatch, getUsers])
	console.log("after dispatch usrs", usrs)

	return <div className="m-3">
		<table className="table table-bordered border">
			<thead>
				<tr>
					<th>List of users</th>
					<th>{usrs.map(u => u.name).join()}</th>
				</tr>
			</thead>
			{rows}
		</table>
	</div>;
}

const mapStateToProps = state => {
	return {...state,
		users: state.users
	};
};

export const mapDispatchToProps = dispatch => {
	return {
		getUsers: () => dispatch(getUsers),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
