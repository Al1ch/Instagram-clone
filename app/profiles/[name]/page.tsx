import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import profile from '@/assets/picture/profile.jpeg';
import GridIcon from '@/assets/vectors/grid.svg';
import Tab from '@/components/Tab';
import prisma from '@/lib/prisma';
import axios from 'axios';
import UserProfile from '@/components/UserProfile';
import Publication from '@/components/Publication';
import PublicationForm from '@/components/PublicationForm';
import { User, Post } from '@/models.types';
import PublicationSection from '@/components/PublicationSection';

export default async function ProfilePage({ params }: { params: { name: string } }) {
	// const [posts, setPosts] = useState<Post[]>([]);
	const infoUser = await prisma.user.findFirst({
		where: {
			name: params.name,
		},
	});

	const posts = await prisma.post.findMany({
		where: {
			authorId: infoUser?.id,
		},
	});

	return (
		<div className="w-full flex flex-col  items-center bg-black ">
			<div className="gap-16 flex flex-row items-center justify-center mt-8">
				<Image
					className="w-32 h-32 rounded-full"
					alt="profile"
					src={infoUser?.profilePic ?? ''}
					width={50}
					height={50}
				/>
				<div className="my-8 flex  ">
					<div className=" bg-black h-full"></div>
					<div className=" flex flex-col gap-4 w-full">
						<div className=" flex items-center gap-x-4">
							<p className="text-white">{params.name}</p>
							<div className="flex items-center gap-2 ">
								<Button label="Message" />
								<Button label="Message" />
								<Button label="Message" />
							</div>
						</div>
						<div className="flex justify-between w-full max-w-xs text-white	">
							<p>{infoUser?.name}</p>
							<p>{infoUser?.follower}</p>
							<p>{infoUser?.following}</p>
						</div>
						<div>{infoUser?.Bio} </div>
					</div>
				</div>
			</div>
			<PublicationSection {...infoUser} posts={posts} />
		</div>
	);
}
