'use client';
import React, { use, useEffect, useState } from 'react';
import Tab from './Tab';
import PublicationForm from './PublicationForm';
import Publication from './Publication';
import { User, Post } from '@/models.types';
import axios from 'axios';

type Props = {
	profilePic?: string | null;
	id?: number;
	name?: string;
	posts: Post[];
};

const PublicationSection = ({ profilePic, name, id: userId, posts: postsInit }: Props) => {
	const [posts, setPosts] = useState<Post[]>(postsInit);

	const handleSubmit = async () => {
		try {
			const res = await axios.get<Post[]>('/api/posts', { params: { authorId: userId } });
			setPosts(res.data);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className=" w-full max-w-2xl flex flex-col items-center  justify-center px-8 gap-4 py-6 ">
			<div className="w-full flex justify-center items-center gap-16 ">
				<Tab label="Publications" />
			</div>
			<div className="w-full bg-white ">
				<PublicationForm image={profilePic ?? ''} authorId={userId} onSubmit={handleSubmit} />
			</div>
			{posts.map((post) => (
				<Publication
					key={post.id}
					url={profilePic ?? ''}
					name={name ?? ''}
					content={post.content ?? ''}
					date={post.createdAt}
				/>
			))}
		</div>
	);
};

export default PublicationSection;
