import React from 'react';
import { getUsersById } from '@/lib/users';
import PublicationSection from '@/components/PublicationSection';
import ProfileInfo from '@/components/ProfileInfo';

export default async function ProfilePage({ params }: { params: { userName: string } }) {
	const { user } = await getUsersById(params.userName);

	return (
		<div className="w-full flex flex-col self-start items-center">
			<ProfileInfo userName={params.userName} />
			<PublicationSection userName={params.userName} />
		</div>
	);
}
