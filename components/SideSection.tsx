import React, { ReactElement, ReactNode, useState } from 'react';
import Header from './Header';
import { getUsers } from '@/lib/users';
import SideBar from './SideBar';

export const SideSection = async () => {
	const { users } = await getUsers();

	return <SideBar users={users} />;
};

export default SideSection;
