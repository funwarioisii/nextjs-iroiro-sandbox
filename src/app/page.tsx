import { User } from "./type";
import ClientComponent from "./client-component";
async function fetchUserFromServer(id: string): Promise<User> {
	"use server";
	const response = await fetch(`http://localhost:3000/api/user?id=${id}`);
	const user = (await response.json()) as User;
	return user;
}

export default async function Home() {
	const user = await fetchUserFromServer("nanika");
	console.log({ user });
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div>
				<p>Server Component</p>
				<span>{JSON.stringify(user, null, 2)}</span>
			</div>
			<ClientComponent user={user} />
		</div>
	);
}
