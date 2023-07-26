import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const { body } = await request.json();
	try {
		const post = await prisma.post.create({
			data: {
				content: body.content,
				author: { connect: { id: 1 } },
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
