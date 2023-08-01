'use server';
import { createPosts, deletePosts } from '@/lib/posts';
import { revalidatePath } from 'next/cache';

export const createPublication = async (content: string, authorId: number, pathName: string) => {
	await createPosts(content, authorId);
	revalidatePath(`/profiles/${pathName}`);
};

export const deletePublication = async (id: number, pathName: string) => {
	await deletePosts(id);
	revalidatePath(`/profiles/${pathName}`);
};
