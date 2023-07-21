import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import profile from '@/assets/picture/profile.jpeg';
import GridIcon from '@/assets/vectors/grid.svg';
import Tab from '@/components/Tab';
import prisma from '@/lib/prisma';
import axios from 'axios';
import UserProfile from '@/components/UserProfile';

export default async function ProfilePage({ params }: { params: { name: string } }) {
	// const getPostProfile = async () => {
	// 	axios.defaults.baseURL = 'http://localhost:3000/api';
	// 	try {
	// 		const res = await axios.get('getPosts', {
	// 			params: {
	// 				id: 1,
	// 			},
	// 		});
	// 		return res.data;
	// 	} catch (e) {
	// 		console.log(e);
	// 	}

	// 	if (!res) {
	// 		console.log('error');
	// 	}
	// };

	const infoUser = await prisma.user.findFirst({
		where: {
			name: params.name,
		},
	});

	const posts = await prisma.post.findMany({
		where: {
			author: {
				id: 1,
			},
		},
	});
	return (
		<div className="w-full items-center bg-black ">
			<div className="gap-16 flex flex-row items-center justify-center mt-8">
				<Image className="w-32 h-32 rounded-full" alt="profile" src={profile} />
				<div className="my-8 flex  ">
					<div className=" bg-black h-full"></div>
					<div className=" flex flex-col gap-4 w-full">
						<div className=" flex items-center gap-x-4">
							<p className="text-white	">{params.name}</p>
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
						<div>BIO </div>
					</div>
				</div>
			</div>
			<div className=" w-full max-w-6xl flex flex-col items-center gap-4  m-auto">
				<div className="w-full flex justify-center items-center gap-16 ">
					<Tab label="Publications" icon={<GridIcon />} />
					{/* <Tab label="Publications" icon={<GridIcon />} />
					<Tab label="Publications" icon={<GridIcon />} /> */}
				</div>
				{/* <div className="grid grid-cols-3 gap-1">
					<Image className=" object-cover w-full h-64" alt="profile" src={profile} />
					<Image className="object-cover w-full h-64" alt="profile" src={profile} />

					<Image className="object-cover w-full h-64" alt="profile" src={profile} />
					<Image className="object-cover w-full h-64" alt="profile" src={profile} />
					<Image className="object-cover w-full h-64" alt="profile" src={profile} />

					<Image className="object-cover w-full h-64" alt="profile" src={profile} />
					<Image className="object-cover w-full h-64" alt="profile" src={profile} />
					<Image className="object-cover w-full h-64" alt="profile" src={profile} />
				</div> */}

				<div className=" flex flex-col gap-1 justify-items-start w-full px-32 bg-[#1b2936]">
					<div className=" flex w-full items-center gap-2">
						<UserProfile
							width={200}
							height={300}
							url={
								'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80'
							}
						/>
						<div className="flex flex-col">
							<p className="text-slate-50"> {infoUser?.name} </p>
							<p className="text-slate-500"> {infoUser?.name}</p>
						</div>
					</div>
					<div>
						<p className="text-slate-50	">Post content azezaezaeaze</p>
					</div>
					<div className="flex gap-1">
						<p className="text-slate-500"> Hours</p>
						<p className="text-slate-500"> Date </p>
					</div>
				</div>
			</div>
		</div>
	);
}
