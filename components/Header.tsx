'use client';
import React, { useState } from 'react';
import BurgerMenuIcon from '@/assets/vectors/burgerMenu.svg';

type Props = {
	handleClick: (isClicked: boolean) => boolean;
};

export const Header = ({ handleClick }: Props) => {
	const [isButtonClicked, setButtonIsClicked] = useState(false);

	const handleEvent = () => {
		setButtonIsClicked(!isButtonClicked);
		console.log('ISBUTTON CLICKED', isButtonClicked);
		handleClick(isButtonClicked);
	};

	return (
		<div
			className="w-full min-h-[200] flex items-center justify-start p-8 md:hidden"
			onClick={handleEvent}
		>
			<BurgerMenuIcon />
		</div>
	);
};

export default Header;
