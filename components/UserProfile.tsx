import React from 'react';
import Image from 'next/image';

type Props = {
	width: number;
	height: number;
	url?: string | null;
};

const UserProfile = ({ width, height, url }: Props) => {
	return (
		<Image
			className="object-cover w-8 h-8 rounded-full"
			width={`${width}`}
			height={`${height}`}
			src={url || ''}
			alt="cc"
		/>
	);
};

export default UserProfile;
