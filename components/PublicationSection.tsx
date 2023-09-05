import React from 'react';
import PublicationForm from './PublicationForm';
import Publication from './Publication';
import { Post } from '@prisma/client';
import { getUsersById } from '@/lib/users';
import { getPostsByAuthor } from '@/lib/posts';

type Props = {
	profilePic?: string | null;
	id?: number;
	name?: string;
	userName: string;
};

const PublicationSection = async ({ userName }: Props) => {
	const { user } = await getUsersById(userName);
	const { posts } = await getPostsByAuthor(user?.id);
	return (
		<div className=" w-full max-w-2xl flex flex-col items-center  justify-center px-8 gap-4 py-6 ">
			<div className="w-full flex justify-center items-center gap-16 ">
				<p className="text-white text-xl">Publications</p>
			</div>
			<div className="w-full bg-white ">
				<PublicationForm image={user?.profilePic ?? ''} authorId={user?.id} />
			</div>
			{posts?.map((post) => (
				<Publication
					key={post.id}
					url={user?.profilePic ?? ''}
					name={user?.name ?? ''}
					content={post.content ?? ''}
					date={post.createdAt}
					postId={post.id}
					disable={false}
				/>
			))}
		</div>
	);
};

export default PublicationSection;
