import prisma from './prisma';
import { Post } from '@prisma/client';

export const getPostsByAuthor = async (authorId?: number | null) => {
	try {
		const posts = await prisma.post.findMany({
			where: {
				authorId: authorId,
				published: true,
			},
		});
		return { posts };
	} catch (e) {
		return { error: e };
	}
};

export const getPosts = async () => {
	try {
		const posts = await prisma.post.findMany({
			where: {
				published: true,
			},
		});
		return { posts };
	} catch (e) {
		console.log(e);
		return { error: e };
	}
};

export const createPosts = async (content: string, authorId: number) => {
	try {
		const post = await prisma.post.create({
			data: {
				content: content,
				author: { connect: { id: authorId } },
				title: 'title',
				published: true,
			},
		});
		return { post };
	} catch (e) {
		console.log(e);
		return { error: e };
	}
};

export const deletePosts = async (id: number) => {
	try {
		await prisma.post.delete({
			where: {
				id: id,
			},
		});
	} catch (e) {
		console.log(e);
		return { error: e };
	}
};
