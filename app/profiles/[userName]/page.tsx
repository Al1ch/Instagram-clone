import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import prisma from '@/lib/prisma';
import axios from 'axios';
import UserProfile from '@/components/UserProfile';
import Publication from '@/components/Publication';
import PublicationForm from '@/components/PublicationForm';
import { User, Post } from '@/models.types';
import PublicationSection from '@/components/PublicationSection';
import { getPostsByAuthor } from '@/lib/posts';
import { getUsersById } from '@/lib/users';

export default async function ProfilePage({ params }: { params: { userName: string } }) {
	const { user } = await getUsersById(params.userName);

	const { posts } = await getPostsByAuthor(user?.id);

	return (
		<div className="w-full flex flex-col  items-center bg-black ">
			<div className="gap-16 flex flex-row items-center justify-center mt-8">
				<Image
					className="w-32 h-32 rounded-full"
					alt="profile"
					src={user?.profilePic ?? ''}
					width={50}
					height={50}
				/>
				<div className="my-8 flex  ">
					<div className=" bg-black h-full"></div>
					<div className=" flex flex-col gap-4 w-full  text-white ">
						<div className=" flex items-center gap-x-4">
							<p className="text-white">{params.userName}</p>
							<div className="flex items-center gap-2 ">
								<Button label="Message" />
							</div>
						</div>
						<div className="flex gap-3 justify-between w-full max-w-xs text-white	">
							<p>{user?.userName}</p>
							<div className="flex flex-col items-center">
								<h3>Abonnée</h3>
								<p>{user?.follower}</p>
							</div>
							<div className="flex flex-col items-center">
								<h3>Abonnement</h3>
								<p> {user?.following}</p>
							</div>
						</div>
						<div>{user?.Bio} </div>
					</div>
				</div>
			</div>
			<PublicationSection {...user} posts={posts} />
		</div>
	);
}
