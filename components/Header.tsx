'use client';
import React, { useState } from 'react';
import BurgerMenuIcon from '@/assets/vectors/burgerMenu.svg';

type Props = {
	OnClick: () => void;
};

export const Header = ({ OnClick: handleClick }: Props) => {
	return (
		<div
			className=" min-h-[200] flex items-start justify-start p-8 md:hidden"
			onClick={handleClick}
		>
			<BurgerMenuIcon />
		</div>
	);
};

export default Header;
