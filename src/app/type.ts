export type User = {
	id: string;
	name: string;
};

export type DatabaseUser = User & { himitsu_password: string };
