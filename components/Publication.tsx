import React from 'react';
import UserProfile from './UserProfile';

type Props = {
	name: string;
	url?: string;
	content: string;
	date?: string;
};

const Publication = ({ name, url, content, date }: Props) => {
	return (
		<div className=" flex flex-col gap-1 justify-items-start w-full  rounded-xl p-6  bg-[#1b2936]">
			<div className=" flex w-full items-center justify-start gap-2">
				<UserProfile
					width={200}
					height={300}
					url={
						'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80'
					}
				/>
				<div className="flex flex-col">
					<p className="text-slate-50"> {name} </p>
					<p className="text-slate-500"> {name}</p>
				</div>
			</div>
			<div>
				<p className="text-slate-50	">{content} </p>
			</div>
			<div className="flex gap-1">
				<p className="text-slate-500"> Hour </p>
				<p className="text-slate-500"> Date </p>
			</div>
		</div>
	);
};

export default Publication;
