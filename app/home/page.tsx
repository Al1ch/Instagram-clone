import Image from 'next/image';
import SideBar from '@/components/SideBar';
import { Post, User } from '@/models.types';
import Publication from '@/components/Publication';

export default async function Home() {
	const usersPosts: Post[] = await prisma.post.findMany();
	const users: User[] = await prisma.user.findMany();

	const getUserAuthor = (id?: number | null) => {
		const user = users.find((user) => user.id === id);
		return user;
	};
	return (
		<div className="w-full flex flex-col items-center py-12">
			<div className="h-8 flex items-center border-y-2 mb-4">
				<h1 className="text-white">Publication List Dump </h1>
			</div>
			<div className=" w-full max-w-2xl flex flex-col items-center  justify-center px-8 gap-4 mb-6 ">
				{usersPosts.map((post) => (
					<Publication
						key={post.id}
						url={getUserAuthor(post.authorId)?.profilePic ?? ''}
						name={getUserAuthor(post.authorId)?.name ?? ''}
						content={post.content ?? ''}
						date={post.createdAt}
					/>
				))}
			</div>
		</div>
	);
}
