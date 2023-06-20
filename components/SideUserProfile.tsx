'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Props = {
	name: string;
	follower: number;
	url: string;
};

const SideUserProfile = ({ name, follower, url }: Props) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/profiles/${name.split('').join('')}`);
	};

	return (
		<button
			className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none"
			onClick={handleClick}
		>
			<Image
				className="object-cover w-8 h-8 rounded-full"
				width="200"
				height="300"
				src={url}
				alt=""
			/>
			<div className="text-left rtl:text-right">
				<h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">{name}</h1>
				<p className="text-xs text-gray-500 dark:text-gray-400">{follower} Followers</p>
			</div>
		</button>
	);
};

export default SideUserProfile;
