type User = {
	id: number;
	name: string;
	followers: number;
	following: number;
	posts: string[];
	avatar: string;
	bio: string;
	pictures: string[];
};

export const users = [
	{
		id: 1,
		name: 'Mia-John',
		followers: 0,
		following: 0,
		posts: [
			{ id: 0, title: 'cc', content: 'cc', published: 'false', author: 1, authorId: 1, likes: 0 },
		],
		avatar:
			'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100',
		bio: 'bonjour ',
		pictures: [],
	},
	{
		id: 2,
		name: 'Arthur-Melo',
		followers: 0,
		following: 0,
		posts: [
			{ id: 0, title: 'cc', content: 'cc', published: 'false', author: 1, authorId: 1, likes: 0 },
		],
		avatar:
			'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100',
		bio: 'ok',
		pictures: [],
	},
	{
		id: 3,
		name: 'Olivia-Wathan',
		followers: 0,
		following: 0,
		posts: [
			{ id: 0, title: 'cc', content: 'cc', published: 'false', author: 1, authorId: 1, likes: 0 },
		],
		avatar:
			'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100',
		bio: 'aurevoir ',
		pictures: [],
	},
	{
		id: 4,
		name: 'Junior-REIS',
		followers: 0,
		following: 0,
		posts: [
			{ id: 0, title: 'cc', content: 'cc', published: 'false', author: 1, authorId: 1, likes: 0 },
		],
		avatar:
			'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100',
		bio: 'tqt',
		pictures: [],
	},
	{
		id: 5,
		name: 'Joseph-Gonzalez',
		followers: 0,
		following: 0,
		posts: [
			{ id: 0, title: 'cc', content: 'cc', published: 'false', author: 1, authorId: 1, likes: 0 },
		],
		avatar:
			'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100',
		bio: 'mayday',
		pictures: [],
	},
];
