import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
	const { body } = await request.json();
	try {
		const post = await prisma.post.create({
			data: {
				content: body.content,
				author: { connect: { id: body.authorId } },
				title: 'title',
				published: true,
			},
		});
		return NextResponse.json({ post });
	} catch (e) {
		console.log(e);
		return NextResponse.error();
	}
}

export async function GET(request: NextRequest) {
	const userId_str = request.nextUrl.searchParams.get('authorId');
	const userId = userId_str ? parseInt(userId_str) : 1;

	const posts = await prisma.post.findMany({
		where: {
			authorId: userId,
			published: true,
		},
	});
	return NextResponse.json(posts);
}
