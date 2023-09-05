'use client';
import React, { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { deletePublication } from '@/app/_action';

type Props = React.HtmlHTMLAttributes<HTMLButtonElement> & {
	label?: string;
	image?: any;
	postId?: number;
};

const Button = ({ className, label, image, postId, ...props }: Props) => {
	const handleClick = async () => {
		await deletePublication(postId || 1, pathName);
	};
	const pathName = usePathname();
	return (
		<button className={className} onClick={handleClick} {...props}>
			<div className="flex items-center justify-between">
				{label && <p className="text-sm text-white"> {label}</p>}
				{image && image}
			</div>
		</button>
	);
};

export default Button;
