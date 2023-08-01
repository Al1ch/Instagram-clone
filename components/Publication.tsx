import React from 'react';
import UserProfile from './UserProfile';
import Trash from '@/assets/vectors/trash.svg';
import Button from './Button';
import { deletePublication } from '@/app/_action';

type Props = {
	name: string;
	url?: string;
	content: string;
	date?: Date;
	key: number;
	postId: number;
};

const getCorrectTimeFormat = (time?: number) => {
	if (!time) return;
	if (time < 10) {
		return `0${time}`;
	}
	return time;
};

const Publication = ({ name, url, content, date, key, postId }: Props) => {
	return (
		<div className=" flex flex-col gap-1 justify-items-start w-full  rounded-xl p-6  bg-[#1b2936]">
			<div className=" flex w-full items-center justify-start gap-2">
				<UserProfile width={200} height={300} url={url} />
				<div className="flex flex-col">
					<p className="text-slate-50"> {name} </p>
					<p className="text-slate-500"> {name}</p>
				</div>
			</div>
			<div>
				<p className="text-slate-50	">{content} </p>
			</div>
			<div className="flex w-full justify-between ">
				<div className="flex gap-1">
					<p className="text-slate-500">
						{getCorrectTimeFormat(date?.getDay())}/{getCorrectTimeFormat(date?.getMonth())}/
						{date?.getFullYear()}
					</p>
					<p className="text-slate-500">
						{getCorrectTimeFormat(date?.getHours())}:{getCorrectTimeFormat(date?.getMinutes())}:
						{getCorrectTimeFormat(date?.getSeconds())}
					</p>
				</div>
				<Button
					image={<Trash className={'hover:fill-red-600 transition-colors'} />}
					// deletePublication={deletePublication}
					className="cursor-pointer"
					postId={postId}
				/>
			</div>
		</div>
	);
};

export default Publication;
