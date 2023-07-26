export type User = {
	id: number;
	name: string;
	userName: string;
	email: string;
	createdAt?: Date;
	updatedAt?: Date;
	posts: Post[];
	follower: number;
	following: number;
	Bio?: string | null;
	profilePic?: string | null;
};

export type Post = {
	id: number;
	title: string;
	content?: string | null;
	published: boolean;
	author?: User | null;
	authorId?: number | null;
	createdAt?: Date;
};
