import React from 'react';

export default function ProfilePage({ params }: { params: { name: string } }) {
	return <div className="w-full h-full bg-red-800 py-8">My name is {params.name}</div>;
}
