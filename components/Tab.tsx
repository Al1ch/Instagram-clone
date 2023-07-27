import React from 'react';

type Props = {
	label: string;
	icon?: any;
};

const Tab = ({ label, icon }: Props) => {
	return (
		<div className="flex items-center justify-center h-8 before:translate-x-1/2 before:content-[''] before:absolute before:bg-black before:w-0 before:h-0.5 ">
			<p className="text-white">{label}</p>
		</div>
	);
};

export default Tab;
