import React from 'react';
import Image from 'next/image';

type Props = {
	label?: string;
	image?: Element;
};

const Button = ({ label, image }: Props) => {
	return (
		<div className="flex items-center border border-solid rounded border-stone-400 p-0.5 ">
			<div className="flex items-center justify-between">
				<p className="text-sm text-white"> {label}</p>
			</div>
		</div>
	);
};

export default Button;
