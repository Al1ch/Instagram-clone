'use server';
import { createPosts } from '@/lib/posts';
import { revalidatePath } from 'next/cache';

export const createPublication = async (content: string, authorId: number) => {
	await createPosts(content, authorId);
	revalidatePath('/profiles');
};
