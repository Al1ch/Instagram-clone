import Image from 'next/image';
import Button from '@/components/Button';
import { getUsersById } from '@/lib/users';
import React from 'react';

type Props = {
	userName: string;
};

const ProfileInfo = async ({ userName }: Props) => {
	const { user } = await getUsersById(userName);
	return (
		<div className="gap-16 flex flex-row items-center justify-center mt-8">
			<Image
				className="w-32 h-32 rounded-full"
				alt="profile"
				src={user?.profilePic ?? ''}
				width={100}
				height={100}
			/>
			<div className="my-8 flex min-w-[125]">
				<div className=" flex flex-col gap-4 w-full  text-white ">
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
	);
};

export default ProfileInfo;
