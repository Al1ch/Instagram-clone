import React from 'react';
import Tab from './Tab';
import PublicationForm from './PublicationForm';
import Publication from './Publication';
import { Post } from '@prisma/client';
import { getPostsByAuthor } from '@/lib/posts';

type Props = {
	profilePic?: string | null;
	id?: number;
	name?: string;
};

const PublicationSection = async ({ profilePic, name, id: userId }: Props) => {
	const { posts } = await getPostsByAuthor(userId);

	return (
		<div className=" w-full max-w-2xl flex flex-col items-center  justify-center px-8 gap-4 py-6 ">
			<div className="w-full flex justify-center items-center gap-16 ">
				<Tab label="Publications" />
			</div>
			<div className="w-full bg-white ">
				<PublicationForm image={profilePic ?? ''} authorId={userId} />
			</div>
			{posts?.map((post) => (
				<Publication
					key={post.id}
					url={profilePic ?? ''}
					name={name ?? ''}
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
