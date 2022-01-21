import React, { ReactElement, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { getUsers, selectUsers, useGetUsersQuery } from '../store/slices/usersSlice';

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
	let rows: ReactElement[] = [];
	const users: User[] = useSelector(selectUsers);

	const {data, error, isLoading} = useGetUsersQuery(null);

	console.log("USERS FROM RTKKKK", data);
	console.log("USERS FROM RTKKKK error", error);
	console.log("USERS FROM RTKKKK isLoading", isLoading);

	useEffect( () => {
		getUsers();
	}, [getUsers])

	let i = 0;
	for (const user of users) {
		rows.push(<tr key={i}>
			<td>{user.name}</td>
		</tr>);
		i++;
	}

	return <div className="m-3">
		<table className="table table-bordered border">
			<thead>
				<tr>
					<th>List of users</th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	</div>;
}

export const mapDispatchToProps = {
	getUsers
};

export default connect(null, mapDispatchToProps)(Users);
