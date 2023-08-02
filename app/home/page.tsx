import Image from 'next/image';
import SideBar from '@/components/SideBar';
import Publication from '@/components/Publication';
import { getPosts } from '@/lib/posts';
import { getUsers } from '@/lib/users';

export default async function Home() {
	const { posts } = await getPosts();
	const { users } = await getUsers();

	const getUserAuthor = (id?: number | null) => {
		const user = users?.find((user) => user.id === id);
		return user;
	};
	return (
		<div className="w-full flex flex-col items-center py-12">
			<div className="h-8 flex items-center border-y-2 mb-4">
				<h1 className="text-white">Publication List Dump </h1>
			</div>
			<div className=" w-full max-w-2xl flex flex-col items-center  justify-center px-8 gap-4 mb-6 ">
				{posts?.map((post) => (
					<Publication
						key={post.id}
						url={getUserAuthor(post.authorId)?.profilePic ?? ''}
						name={getUserAuthor(post.authorId)?.name ?? ''}
						content={post.content ?? ''}
						date={post.createdAt}
						disable={true}
						postId={post.id}
					/>
				))}
			</div>
		</div>
	);
}
