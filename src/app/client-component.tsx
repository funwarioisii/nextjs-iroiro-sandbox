"use client";

import { User } from "./type";

const ClientComponent = ({ user }: { user: User }) => {
	console.log({ user });
	return (
		<div>
			<p>Client Component</p>
			<span>{JSON.stringify(user, null, 2)}</span>
		</div>
	);
};

export default ClientComponent;
