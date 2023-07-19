import React from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import profile from '@/assets/picture/profile.jpeg';
import GridIcon from '@/assets/vectors/grid.svg';
import Tab from '@/components/Tab';

export default function ProfilePage({ params }: { params: { name: string } }) {
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
							<p>72 posts</p>
							<p>11k2 followers</p>
							<p>63 following </p>
						</div>
						<div>BIO </div>
					</div>
				</div>
			</div>
			<div className=" w-full max-w-6xl flex flex-col items-center gap-4  m-auto">
				<div className="w-full flex justify-center items-center gap-16 ">
					<Tab label="Publications" icon={<GridIcon />} />
					<Tab label="Publications" icon={<GridIcon />} />
					<Tab label="Publications" icon={<GridIcon />} />
				</div>
				<div className="grid grid-cols-3 gap-1">
					<Image className=" object-cover w-full h-64" alt="profile" src={profile} />
					<Image className="object-cover w-full h-64" alt="profile" src={profile} />

					<Image className="object-cover w-full h-64" alt="profile" src={profile} />
					<Image className="object-cover w-full h-64" alt="profile" src={profile} />
					<Image className="object-cover w-full h-64" alt="profile" src={profile} />

					<Image className="object-cover w-full h-64" alt="profile" src={profile} />
					<Image className="object-cover w-full h-64" alt="profile" src={profile} />
					<Image className="object-cover w-full h-64" alt="profile" src={profile} />
				</div>
			</div>
		</div>
	);
}
