import React, { PropsWithChildren, ReactElement } from 'react';

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
export const Users: React.FC<{}> = () => {
// export const Users: React.FC<User> = (props: PropsWithChildren<User>) => {
	let rows: ReactElement[] = [];

	return <div className="m-3">
		<table className="table table-bordered border">
			<thead>
				<tr>
					<th>List of users</th>
				</tr>
			</thead>
			{rows}
		</table>
	</div>;
}
