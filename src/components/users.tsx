import React, { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addProduct, getUsers, removeProduct } from '../store/actions';
import { store } from '../store/store';

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
export const Users: React.FC<any> = (props) => {
// export const Users: React.FC<User> = (props: PropsWithChildren<User>) => {
	let rows: ReactElement[] = [];
	const [users, setUsers] = useState([]);

	useEffect( () => {
		console.log("mounted", props)
		getUsers();
		const zzz = getUsers();
		console.log("zzz", zzz)
		const aaa = store.getState().users;
		console.log("aaa", aaa)
	})
	const add = () => {
		getUsers();
	}

	return <div className="m-3">
		<table className="table table-bordered border">
			<thead>
				<tr>
					<th>List of users</th>
					<th><button onClick={add}>get users</button></th>
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
		getUsers: () => dispatch(getUsers()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
