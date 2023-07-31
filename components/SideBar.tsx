import React from 'react';
import Image from 'next/image';
import SideUserProfile from './SideUserProfile';
import prisma from '@/lib/prisma';
import People from '@/assets/vectors/people.svg';
import Home from '@/assets/vectors/home.svg';
import Link from 'next/link';
import { User } from '@/models.types';

const SideBar = async () => {
	const users: User[] = await prisma.user.findMany();

	const menuContent = [
		{
			id: 1,
			name: 'Home',
			icon: <Home />,
			path: '/home',
			isActive: false,
		},
		{
			id: 2,
			name: 'Users',
			icon: <People />,
			path: `/profiles/${users[0].userName}}`,
			isActive: false,
		},
	];

	return (
		<aside className="flex ">
			<div className="flex flex-col items-center w-16  py-8 space-y-8 bg-white dark:bg-gray-900 dark:border-gray-700 ">
				<a href="#">
					<Image
						className="w-auto h-6"
						src="https://merakiui.com/images/logo.svg"
						width="200"
						height="300"
						alt=""
					/>
				</a>
				{menuContent.map((item) => {
					return (
						<Link href={`${item.path}`} key={item.id} className="">
							{item.icon}
						</Link>
					);
				})}
			</div>

			<div className="py-8 overflow-y-auto h-full bg-white border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700">
				<h2 className="px-5 text-lg font-medium text-gray-800 dark:text-white">Accounts</h2>

				<div className="mt-8 space-y-4">
					{users.map((user) => (
						<SideUserProfile
							key={user.id}
							name={user.userName}
							follower={user.follower}
							url={user.profilePic ?? ''}
						/>
					))}
				</div>
			</div>
		</aside>
	);
};

export default SideBar;
